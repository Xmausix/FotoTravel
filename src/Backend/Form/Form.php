<?php
// Ustawienia
$to = "twoj_email@domena.pl"; // tutaj wpisz swój adres email, na który mają przychodzić wiadomości

// Sprawdzenie czy dane przyszły metodą POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Pobranie i oczyszczenie danych
    $name = trim($_POST["name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $subject = trim($_POST["subject"] ?? "");
    $message = trim($_POST["message"] ?? "");

    // Prosta walidacja
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Wszystkie pola są wymagane."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Nieprawidłowy adres email."]);
        exit;
    }

    // Przygotowanie treści maila
    $email_subject = "Formularz kontaktowy: " . $subject;
    $email_body = "Masz nową wiadomość z formularza kontaktowego.\n\n" .
                  "Imię i nazwisko: $name\n" .
                  "Email: $email\n" .
                  "Temat: $subject\n" .
                  "Wiadomość:\n$message\n";

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Wysłanie maila
    if (mail($to, $email_subject, $email_body, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Wiadomość została wysłana."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Wystąpił błąd podczas wysyłania wiadomości."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Metoda nieobsługiwana."]);
}

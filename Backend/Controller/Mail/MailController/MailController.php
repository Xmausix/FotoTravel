<?php
// Konfiguracja odbiorcy i tematu wiadomości
$recipientEmail = "twoj_adres@gmail.com";
$subject = "Nowa wiadomość z formularza kontaktowego";

// Sprawdzenie, czy formularz został wysłany metodą POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Walidacja i filtrowanie danych wejściowych
    $fullName = htmlspecialchars(trim($_POST["full_name"] ?? ""));
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"] ?? ""));

    // Sprawdzenie poprawności danych
    if (!$fullName || !$email || !$message) {
        http_response_code(400);
        echo "Wszystkie pola są wymagane i muszą być poprawne.";
        exit;
    }

    // Treść e-maila
    $emailBody = "Imię i nazwisko: $fullName\n";
    $emailBody .= "Adres email: $email\n\n";
    $emailBody .= "Treść wiadomości:\n$message\n";

    // Nagłówki e-maila
    $headers = "From: $fullName <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Wysłanie e-maila
    if (mail($recipientEmail, $subject, $emailBody, $headers)) {
        http_response_code(200);
        echo "Wiadomość została wysłana pomyślnie.";
    } else {
        http_response_code(500);
        echo "Wystąpił błąd podczas wysyłania wiadomości.";
    }
} else {
    http_response_code(405);
    echo "Metoda nie dozwolona.";
}
?>
<?php

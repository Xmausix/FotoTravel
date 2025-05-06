<?php
header('Content-Type: application/json');

$posts = [
    1 => [
        "title" => "Wizyta w Krakowie",
        "content" => "Byłem w pięknym mieście Kraków!",
        "location" => "Kraków, Polska"
    ],
    2 => [
        "title" => "Spacer po Berlinie",
        "content" => "Odwiedziłem Berlin!",
        "location" => "Berlin, Niemcy"
    ]
];

$postId = isset($_GET['id']) ? (int)$_GET['id'] : 1;
$post = $posts[$postId] ?? null;

if ($post) {
    echo json_encode($post);
} else {
    http_response_code(404);
    echo json_encode(["error" => "Post not found"]);
}
?>

<?php

// Ustaw nagłówki CORS i Content-Type (żeby Vue mógł się łączyć bez problemów)
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Mockowane dane
$data = [
    'pageViews' => [
        'total' => 5820,
        'today' => 234,
        'yesterday' => 189,
        'weekly' => 1342,
        'monthly' => 5820
    ],
    'imageViews' => [
        'total' => 9450,
        'today' => 421,
        'yesterday' => 387,
        'weekly' => 2245,
        'monthly' => 9450
    ],
    'mostViewedPosts' => [
        ['id' => '3', 'title' => 'Hiking the Inca Trail to Machu Picchu', 'views' => 1578],
        ['id' => '5', 'title' => 'Culinary Tour of Northern Italy', 'views' => 1342],
        ['id' => '1', 'title' => 'Exploring the Hidden Beaches of Thailand', 'views' => 1250],
        ['id' => '2', 'title' => 'A Week in the Heart of Tokyo', 'views' => 982],
        ['id' => '4', 'title' => 'Safari Adventure in Tanzania', 'views' => 865]
    ],
    'messageStats' => [
        'total' => 78,
        'unread' => 23,
        'thisWeek' => 12
    ],
    'weeklyViewsData' => [
        ['day' => 'Mon', 'views' => 120],
        ['day' => 'Tue', 'views' => 145],
        ['day' => 'Wed', 'views' => 232],
        ['day' => 'Thu', 'views' => 254],
        ['day' => 'Fri', 'views' => 265],
        ['day' => 'Sat', 'views' => 187],
        ['day' => 'Sun', 'views' => 139]
    ],
    'categoryViewsData' => [
        ['name' => 'Beach', 'views' => 1458],
        ['name' => 'Mountain', 'views' => 1789],
        ['name' => 'City', 'views' => 1254],
        ['name' => 'Wildlife', 'views' => 865],
        ['name' => 'Food', 'views' => 1342]
    ]
];

// Jeśli chcesz dodać aktualizację liczby odsłon (np. przez POST request)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (isset($input['action'])) {
        switch ($input['action']) {
            case 'incrementPageViews':
                $data['pageViews']['total']++;
                $data['pageViews']['today']++;
                $data['pageViews']['weekly']++;
                $data['pageViews']['monthly']++;
                break;

            case 'incrementImageViews':
                $data['imageViews']['total']++;
                $data['imageViews']['today']++;
                $data['imageViews']['weekly']++;
                $data['imageViews']['monthly']++;
                break;

            case 'incrementPostView':
                if (isset($input['postId'])) {
                    foreach ($data['mostViewedPosts'] as &$post) {
                        if ($post['id'] === $input['postId']) {
                            $post['views']++;
                            break;
                        }
                    }
                    // Sortowanie po ilości wyświetleń malejąco
                    usort($data['mostViewedPosts'], function($a, $b) {
                        return $b['views'] <=> $a['views'];
                    });
                }
                break;
        }
    }
}

// Zwróć dane jako JSON
echo json_encode($data);

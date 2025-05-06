<?php

require_once __DIR__ . '/../models/TrafficModel.php';

class TrafficController
{
    private $model;

    public function __construct($pdo)
    {
        $this->model = new TrafficModel($pdo);
    }

    public function track()
    {
        $ip = $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';
        $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'UNKNOWN';
        $referrer = $_SERVER['HTTP_REFERER'] ?? 'DIRECT';
        $uri = $_SERVER['REQUEST_URI'] ?? '/';

        $this->model->logVisit($ip, $userAgent, $referrer, $uri);
    }

    public function dashboard()
    {
        $visits = $this->model->getVisits(100);
        $stats = $this->model->getStats();
        include __DIR__ . '/../views/traffic_dashboard.php';
    }
}

<?php
class TrafficModel {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function logVisit($ip, $userAgent, $referrer, $uri) {
        $stmt = $this->pdo->prepare("
            INSERT INTO traffic_logs (ip, user_agent, referrer, uri, visit_time) 
            VALUES (:ip, :user_agent, :referrer, :uri, NOW())
        ");
        $stmt->execute([
            ':ip' => $ip,
            ':user_agent' => $userAgent,
            ':referrer' => $referrer,
            ':uri' => $uri
        ]);
    }

    public function getVisits($limit = 100) {
        $stmt = $this->pdo->prepare("SELECT * FROM traffic_logs ORDER BY visit_time DESC LIMIT :limit");
        $stmt->bindValue(':limit', (int)$limit, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getStats() {
        $stmt = $this->pdo->query("
            SELECT 
                COUNT(*) AS total_visits,
                COUNT(DISTINCT ip) AS unique_visitors,
                MAX(visit_time) AS last_visit
            FROM traffic_logs
        ");
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}

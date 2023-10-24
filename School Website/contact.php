<?

$host = 'localhost';
$user = 'root';
$password = "";
$db_name = 'techinnovation';
$table_name = 'appointment_person';

if ($_SERVER["REQUEST_METHOD"] == 'POST' && isset($_POST["submit"])) {

    $courseName = $_POST["courseName"];
    $personName = $_POST["personName"];
    $contect = $_POST["contect"];
    $date = $_POST["date"];
    $time = $_POST["time"];
    
    $con = mysqli_connect($host, $user, $password, $db_name);

    if ($con) {
        $stmt = mysqli_prepare($con, "INSERT INTO $table_name (course_name, person_name, contact, ap_date, ap_time) VALUES (?,?,?,?,?)");

        if ($stmt) {
            $stmt->bind_param();

            $result = $stmt->execute();

            if ($result) {
                echo "Data inserted successfully";
            } else {
                echo "Unable to insert" . mysqli_error($con);
            }
        } else {
            echo "Unable to preapre query" . mysqli_error($con);
        }
    } else {
        echo "Unable to connect database" . mysqli_error($con);
    }
}

?>
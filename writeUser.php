<?php
  header("Content-Type: application/json");
  $jsonArray["status"]=0;
  $jsonArray["data"]=[];
  $jsonArray["msg"]="failure - default";
  $jsonArray["request"]=$_POST;

  if(isset($_POST['read'])){ //RESPONSE CASE 1
    $user_key = "";

    if(isset($_POST['user_hash'])){
      $user_key = $_POST['user_hash'];
      $read_data = read_cff($user_key);
      if($read_data != false){
        $jsonArray["status"]=1;
        $jsonArray["data"]=$read_data;
        $jsonArray["msg"]="read success";
      }
      else{
        $jsonArray["status"]=1;
        $jsonArray["data"]="{}";
        $jsonArray["msg"]="no results found";
      }
    }
    else{
      $jsonArray["msg"]="error - no user hash";
    }
  }

  elseif(isset($_POST['write'])){ //RESPONSE CASE 2
    $user_key = $_POST['user_hash'];
    $user_classes = parse($_POST['data']);
    $write_status = write_ctf($user_key, $user_classes);
    if($write_status){ //Write succeeded
      $jsonArray["status"]=1;
      $jsonArray["msg"]="success - php write succeeded.";
    }
    else{ //Write failed
      $jsonResponse["msg"]="failure - php unable to write data.";
    }
  }

  else{
    $jsonResponse["msg"]="failure - no specified read/write case.";
  }

  $jsonResponse = json_encode($jsonArray);
  echo $jsonResponse;
?>

<?php //PHP helper functions
  function debug_to_console($message){
    echo "<script>";
    echo "console.log(\"$message\")";
    echo "</script>";
  }

  function parse($raw_class_data){
    $class_array = [];
    $tok = strtok($raw_class_data, '",[]');
    while($tok !== false){
      array_push($class_array, $tok);
      $tok = strtok('",[]');
    }
    return $class_array;
  }

  function jstring($class_array){
    $result_string = "[";
    for($i = 0; $i < count($class_array); $i++){
      $result_string .= ('"' . $class_array[$i] . '",');
    }
    $result_string .= "]";
    return $result_string;
  }
?>

<?php //File I/O functions
  function read_cff($username_hash){ //Returns an array of class-name strings as read from file.
    $source_file = "data/user_data/" . $username_hash . ".txt";
    $handle = fopen($source_file, "r") or die("Unable to open file for reading! (1)");
    if($handle){
      $file_classes = [];
      while (($line = fgets($handle)) !== false) {
          if($line[0] == '#')
            continue;
          else {
            array_push($file_classes, rtrim($line)); //append line to file_classes array after stripping trailing characters.
          }
      }
      fclose($handle);
      return $file_classes;
    }
    else{
      return false;
    }
  }

  function write_ctf($username_hash, $class_array){ //Appends an array of class-names to file
    $dest_file = "data/user_data/" . $username_hash . ".txt";
    $handle = fopen($dest_file, "w") or die("Unable to open file for writing! (1)");
    if($handle){
      for($i = 0; $i < count($class_array); $i++){
        $class_data_line = $class_array[$i] . "\n";
        fwrite($handle, $class_data_line);
      }
      return true;
    }
    else{
      return false;
    }
  }
?>

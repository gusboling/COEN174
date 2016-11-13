<?php
  header("Content-Type: application/json");
  $jsonArray["status"]=0;
  $jsonArray["data"]=[];
  $jsonArray["msg"]="failure - default";
  //$jsonArray["request.read"]=$_POST['read'];

  if(isset($_POST['read'])) { //RESPONSE CASE 1
    $user_key = $_POST['user_hash'];
    $read_result = read_cff($user_key);
    if($read_result){
      $jsonArray["status"]=1;
      $jsonArray["data"]=$read_result;
      $jsonArray["msg"]="success - read returned some data.";
    }
    else{ //read failed and/or search for user_key yielded no results.
      $jsonArray["status"]=1;
      $jsonArray["msg"] = "success - read returned no data.";
    }

  }

  elseif(isset($_POST['write'])) { //RESPONSE CASE 2
    $user_key = $_POST['user_hash'];
    $user_classes = parse($_POST['data']);
    $write_status = write_ctf($user_key, $user_classes);
    if($write_status){ //Write succeeded
      $jsonArray["status"]=1;
      $jsonArray["msg"]="success - php write succeeded.";
    }
    else{ //Write failed
      $jsonArray["msg"]="failure - php unable to write data.";
    }
  }

  else { //RESPONSE CASE 3
    $jsonArray["msg"]="failure - no specified read/write case.";
  }


  //encode php as json response and send to client. Happens each time this page is accessed.
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

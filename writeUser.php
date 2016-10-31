<!DOCTYPE html>
<html>
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
        echo "Unable to open file for reading! (2)";
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

  <?php
    if(isset($_POST['data'])){
      debug_to_console("Data Recieved!");
      $raw_data = $_POST['data'];
      $class_data = parse($raw_data);
    }

    elseif(isset($_POST['read'])){
      $user_key = $_POST['user_hash'];
      $user_classes = read_cff($user_key);
      if($user_classes !== false){
        echo jstring($user_classes);
      }
      else{
        echo "false";
      }
    }
    
    elseif(isset($_POST['write'])){
      $user_key = $_POST['user_hash'];
      $user_classes = parse($_POST['data']);
      $write_status = write_ctf($user_key, $user_classes);
      echo $write_status;
    }
    else{
      debug_to_console("No Data Recieved!");

      /*
      $test_key = "20eabe5d64b0e216796e834f52d61fd0b70332fc";
      $test_data = '["AMTH 106","AMTH 108","CHEM 11","COEN 10","COEN 10L","COEN 11","COEN 11L","COEN 12","COEN 122","COEN 122L","COEN 12L","COEN 146","COEN 146L","COEN 148","COEN 148L","COEN 169","COEN 171","COEN 174","COEN 174L","COEN 177","COEN 177L","COEN 178","COEN 178L","COEN 179","COEN 19","COEN 194","COEN 20","COEN 20L","COEN 21","COEN 21L","COEN 70","COEN 70L","ELEN 153","ELEN 153L","ELEN 50","ELEN 50L","ENGL 181","ENGL 1A","ENGL 2A","ENGR 1","ENGR 111","ENGR 19","ENGR 1L","ETHN 40","HIST 11A","HIST 12A","MATH 11","MATH 12","MATH 13","MATH 14","MATH 53","PHYS 11","PHYS 31","PHYS 32","PHYS 33","POLI 2","RSOC 113","RSOC 9","TESP 82","TRCR 1"]';
      $result_array = parse($test_data);
      $writeResult = write_ctf($test_key ,$result_array);
      echo jstring($result_array);
      */
      echo "Hello World!";
    }
  ?>
</html>

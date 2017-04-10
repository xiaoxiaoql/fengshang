<?php
	$name=isset($_POST['username'])?$_POST['username']:'';
	$pasw=isset($_POST['pasw'])?$_POST['pasw']:'';
	// $obj=array('username'=>$username,'pasw'=>$pasw);
	$servername='localhost';
	$username='root';
	$password='';
	$dbname='fs';

	// 创建连接
	$conn = new mysqli($servername, $username, $password, $dbname);

	// 检测连接
	if ($conn->connect_error) {
	    die("连接失败: " . $conn->connect_error);
	} 
	// // 查询数据
	// $sql = 'select * from user';
	// // 查询数据库获取数据
	// $result = $conn->query($sql);
	// //使用查询结果集
	// $row = $result->fetch_all(MYSQLI_ASSOC);
	// for($i=0;$i<count($row);$i++){
	// 	if($row[$i]['username']==$name){
			
	// 	}
	// };
	

	if($name!=''&&$pasw!=''){
		// 插入数据
		$sql = "INSERT INTO user (username, password)
				values ('".$name."', '".$pasw."')";
		//若能查询获取到数据库的数据，则插入数据成功		
		if ($conn->query($sql) === TRUE) {
		    echo "yes";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}
	

	
?>
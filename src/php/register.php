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

	if($name!=''&&$pasw!=''){
		// 插入数据
		$sql = "INSERT INTO user (username, password)
				values ('".$name."', '".$pasw."')";
		//若能查询获取到数据库的数据，则插入数据成功		
		if ($conn->query($sql) === TRUE) {
		    echo "新记录插入成功";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}

	
?>
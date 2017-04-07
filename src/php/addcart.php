<?php
	$num=isset($_GET['num'])?$_GET['num']:'';
	$delidx=isset($_GET['delid'])?$_GET['delid']:'';
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

		//若有删除请求，则删除该条信息
		if($delidx!=''){
			$sql="DELETE FROM cartlist where idx='".$delidx."'";
			if ($conn->query($sql) === TRUE) {
			}

		}
		if($num!=''){
			// 插入数据
			$sql = "INSERT INTO cartlist (idx) values ('".$num."')";
			//若能查询获取到数据库的数据，则插入数据成功		
			if ($conn->query($sql) === TRUE) {
			    // echo "新记录插入成功";
			} else {
			    // echo "Error: " . $sql . "<br>" . $conn->error;
			};

		}

		


		$sql='select idx from cartlist';
		// 查询数据库获取数据
		$result = $conn->query($sql);


		//使用查询结果集
		$row = $result->fetch_all(MYSQLI_ASSOC);
		echo json_encode($row);
?>
<!doctype html>
<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>K19 - Treinamentos</title>
	</head>
	<body>
		<h1>Parâmetros</h1>
		<?php
		
			$_SERVER['QUERY_STRING'] = false;

			$params = file_get_contents('php://input') . '&' . $_SERVER['QUERY_STRING'];
			$params = explode('&', $params);

			echo '<ul>';

			foreach($params as $param)
			{
				if(!empty($param))
				{
					echo '<li>' . urldecode($param) . '</li>';
				}
			}

			echo '</ul>';
		?>
	</body>
</html>
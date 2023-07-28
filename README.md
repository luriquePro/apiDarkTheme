# apiDarkTheme

## Uso

Para usar a API você precisa linkar no seu html o script da API no final do seu documento.

Logo Após crie uma div com os atributos, <br><hr>
  Class = theme <br>
  id = toggleThemeButton
  <br>
  <hr>

#### Exemplo

~~~javascript  
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API</title>
</head>
<body>
    <div class="theme" id="toggleThemeButton"></div>
</body>
<script src="https://github.com/luriquePro/apiDarkTheme/blob/main/js/darkModeScript.js"></script>
</html>

~~~  


## Funcionalidades

Para alterar o id do Botão você precisará informar.

então após chamar o script da API, chame a função __loadTheme__ passando como primeiro parametro o target da div

### Exemplo 

~~~javascript 
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API</title>
</head>
<body>
    <div class="theme" id="toggleThemeButton2"></div>
</body>
<script src="https://github.com/luriquePro/apiDarkTheme/blob/main/js/darkModeScript.js"></script>
<script>
  loadTheme('toggleThemeButton2')
</script>
</html>
~~~

Para alterar o target que por padrão é o Body, você precisará passar outros 2 parametros.

O segundo será o target da nova div, e o terceiro o tipo (class || id)

### Exemplo 

~~~javascript 
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API</title>
</head>
<body>
    <div class="theme" id="toggleThemeButton2"></div>
    <div class="contant"></div>
</body>
<script src="https://github.com/luriquePro/apiDarkTheme/blob/main/js/darkModeScript.js"></script>
<script>
  loadTheme('toggleThemeButton2', 'contant', 'class')

</script>
</html>
~~~

OU

~~~javascript 
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API</title>
</head>
<body>
    <div class="theme" id="toggleThemeButton2"></div>
    <div id="contant"></div>
</body>
<script src="https://github.com/luriquePro/apiDarkTheme/blob/main/js/darkModeScript.js"></script>
<script>
  loadTheme('toggleThemeButton2', 'contant', 'id')

</script>
</html>
~~~

O Body e o Botão ambos recebem a classe Dark (por padrão), caso o segundo parametro da função __loadTheme__ seja alterado, não será mais o Body qual receberá a classe, será o valor passado como segundo parametro

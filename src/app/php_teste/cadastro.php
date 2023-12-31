<?php
session_start();
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Cadastro</title>
</head>

<body>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">

          <?php
          if (isset($_SESSION['status_cadastro'])) :
          ?>

            <div class="notification is-success" id="cadastroOk">
              <p>Cadastro efetuado!</p>
              <br>
              <p>Faça login <a href="login.php">aqui!</a></p>
            </div>

          <?php
          endif;
          unset($_SESSION['status_cadastro']);
          ?>

          <?php
          if (isset($_SESSION['usuario_existe'])) :
          ?>
            <div class="notification is-info" id="cadastroNotOk">
              <p>O usuário escolhido já existe.</p>
              <p>Informe outro e tente novamente.</p>
            </div>
          <?php
          endif;
          unset($_SESSION['usuario_existe']);
          ?>

          <div class="centralizar">
            <div class="formulario">
              <div class="formImg" style="height: 466px;">
                <img src="../img/banners/cadastroImg.png" class="img-fluid" alt="">
              </div>
              <form action="cadastrar.php" method="POST">
                <div class="cad-title">
                  <h1 class="title">Cadastro</h1>
                </div>
                <section class="container-forms">
                  <div class="row">
                    <div class="input-box">
                      <label for="nome">Nome</label>
                      <input type="text" name="nome" id="nome" class="input is-large" required>
                    </div>
                    <div class="input-box">
                      <label for="nome">Usuário</label>
                      <input type="text" name="usuario" class="input is-large" id="usuario">
                    </div>
                    <div class="input-box">
                      <label for="nome">Senha</label>
                      <input type="password" name="senha" class="input is-large">
                    </div>
                  </div>

                  <div class="row">
                    <div class="input-box">
                      <label for="cep">CEP</label>
                      <input type="text" id="cep" class="input is-large" required>
                    </div>
                    <div class="input-box">
                      <label for="endereco">Endereço</label>
                      <input type="text" id="endereco" class="input is-large" required>
                    </div>
                    <div class="input-box">
                      <label for="numero">Número</label>
                      <input type="text" id="numero" class="input is-large" required>
                    </div>
                  </div>

                  <div class="row">
                    <div class="input-box">
                      <label for="bairro">Bairro</label>
                      <input type="text" id="bairro" class="input is-large" required>
                    </div>
                    <div class="input-box">
                      <label for="cidade">Cidade</label>
                      <input type="text" id="cidade" class="input is-large" required>
                    </div>
                    <div class="input-box">
                      <label for="estado">Estado</label>
                      <input type="text" id="estado" class="input is-large" required>
                    </div>
                  </div>
                </section>
                <div class="card-btn-save">
                  <button class="btn">Cadastrar</button>
                </div>
              </form>
            </div>
          </div>
  </section>



  </div>
  </div>
  </div>
  </div>
  </section>

</body>

</html>

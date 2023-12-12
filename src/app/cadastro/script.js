function validarCPF(cpf) {
    // Expressão regular para validar o formato de CPF (11 dígitos numéricos)
    let cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
  }
  
  function validarEmail(email) {
    // Expressão regular para validar o formato de email
    let emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
  
  function cadastrar() {
    // Obtenha os valores dos campos
    let nome = document.getElementById('pNome').value;
    let email = document.getElementById('pEmail').value;
    let cpf = document.getElementById('pCpf').value;
    let senha = document.getElementById('pSenha').value;
  
    // Verificar se os campos obrigatórios estão vazios
    if (nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return false; 
  
    // Validar o formato do CPF
    if (!validarCPF(cpf)) {
      alert('Por favor, insira um CPF válido.');
      return false;
    }
  
    // Validar o formato do email
    if (!validarEmail(email)) {
      alert('Por favor, insira um email válido.');
      return false;
    }
    return false;
  }
}
  
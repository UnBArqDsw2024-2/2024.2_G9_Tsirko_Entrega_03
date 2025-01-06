import * as crypto from 'crypto';

export class SenhaProxy {
  private static salt: string = "secreto";

  // Processa a senha, adicionando segurança
  public static processarSenha(senha: string): string {
    // Opcional: Verifica critérios adicionais de segurança
    if (!this.verificarComplexidade(senha)) {
      throw new Error("A senha precisa ter pelo menos uma letra maiúscula, um número e um caractere especial.");
    }

    // Criptografa a senha antes de armazená-la
    return this.criptografarSenha(senha);
  }

  // Verifica a complexidade da senha
  private static verificarComplexidade(senha: string): boolean {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(senha);
  }

  // Criptografa a senha usando um hash seguro
  private static criptografarSenha(senha: string): string {
    const hash = crypto.createHmac('sha256', this.salt);
    hash.update(senha);
    return hash.digest('hex');
  }
}
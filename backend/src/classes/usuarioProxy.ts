import * as crypto from 'crypto';

export class SenhaProxy {
  private static salt: string = "secreto";

  // Processa a senha, adicionando segurança
  public static processarSenha(senha: string): string {
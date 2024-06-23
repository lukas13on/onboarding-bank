/** Serviço de usuarios */
export default class userService {

  /**
   * Retorna todos os usuarios
   */
  static getAll() {
    return {
      message: "Hello World!",
      success: true,
    };
  }

  /**
   * Retorna um usuario pelo id
   */
  static getById(id_usuario: number) {
    return {
      message: "Hello World!",
      success: true,
      id_usuario
    };
  }

  /**
   * Cria um usuario
   */
  static create(user: any) {
    return {
      message: "Hello World!",
      success: true,
    };
  }

  /**
   * Atualiza um usuario
   */
  static update(id_usuario: number, user: any) {
    return {
      message: "Hello World!",
      success: true,
    };
  }

  /**
   * Deleta um usuario
   */
  static delete(id_usuario: number) {
    return {
      message: "Hello World!",
      success: true,
    };
  }
}

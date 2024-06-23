import ProspectModel, { Prospect, ProspectWithoutId } from "@/models/prospect/ProspectModel";

/** Serviço de prospectos */
export default class userService {
  /**
   * Retorna todos os prospectos
   */
  static async getAll() {
    return ProspectModel.getAll();
  }

  /**
   * Retorna um prospecto pelo id
   */
  static getById(id_prospecto: number) {
    return ProspectModel.getById(id_prospecto);
  }

  /**
   * Cria um prospecto
   */
  static create(prospecto: ProspectWithoutId) {
    return ProspectModel.create(prospecto);
  }

  /**
   * Atualiza um prospecto
   */
  static update(id_prospecto: number, prospecto: Prospect) {
    return ProspectModel.update(id_prospecto, prospecto);
  }

  /**
   * Deleta um prospecto
   */
  static delete(id_prospecto: number) {
    return ProspectModel.delete(id_prospecto);
  }
}

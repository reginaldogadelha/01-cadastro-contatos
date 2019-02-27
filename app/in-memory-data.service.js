"use strict";
class InMemoryDataService {
    createDb() {
        let contatos = [
            { id: 1, nome: 'Fulano de tal', email: 'fulano@email.com', telefone: '(00) 00000-0000' },
            { id: 2, nome: 'Ciclano', email: 'ciclano@email.com', telefone: '(00) 00000-0000' },
            { id: 3, nome: 'Xaves', email: 'xaves@email.com', telefone: '(00) 00000-0000' },
            { id: 4, nome: 'Kiko', email: 'kiko@email.com', telefone: '(00) 00000-0000' },
            { id: 5, nome: 'Madruga', email: 'madruga@email.com', telefone: '(00) 00000-0000' }
        ];
        return { 'contatos': contatos };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map
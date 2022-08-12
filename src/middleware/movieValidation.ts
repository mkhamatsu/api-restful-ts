import { body } from "express-validator";

export const movieValidation = () => {
    return [
        body("title")
            .isString()
            .withMessage("O título é obrigatório")
            .isLength({ min: 5 })
            .withMessage("O título precisa ter no mínimo 5 caracteres"),

        body("rating")
            .isNumeric()
            .withMessage("A nota precisa ser um número")
            .custom((value: number) => {
                if (value < 0 || value > 10) {
                    throw new Error("A nota precisa ser entre 0 e 10")
                }
            }),

        body("description")
            .isString()
            .withMessage("O campo descrição obrigatório"),

        body("director")
            .isString()
            .withMessage("O campo diretor é obrigatório"),


        body("poster")
            .isURL()
            .withMessage("A imagem precisa ser URL"),

    ];
};
export interface IEmailsDto {
    list: IEmailDto[];
    total: number;
}

export interface IEmailDto {
    id: string;
    from: IForm;
    date: number;
    subject: string;
    short_description: string;
}

export interface IForm {
    email: string;
    name: string;
}

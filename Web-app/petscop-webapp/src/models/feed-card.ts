import { randomUUID, UUID } from "node:crypto";

export class feedCardElement {
    id: UUID = randomUUID();
    userIconUrl: string = "";
    userName: string = "";
    postImgUrl: string = "";
    postDescription: string = "";
}
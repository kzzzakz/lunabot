import { D } from "../TypeScript/Interfaces";

export const RemoveToken = (string: string, d: D) => {
	const rgx = new RegExp(d.client.token, "gi");
	return string.replace(rgx, "Super secret and sexy token");
};

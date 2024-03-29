import { MessageEmbed } from "discord.js";
import { D } from "../TypeScript/Interfaces";

export const NoticeError = async (type: "cd" | "wrong_usage" | "bot_missing_permissions" | "user_missing_permissions" | "interaction_filter" | "interaction_not_found" | "command_not_found" | "internal_error" | "internal_error_report", d: D) => {
	const lang = d.configuration.guild.language;
	const ErrorEmbed = new MessageEmbed()
		.setColor(`#${d.client.Internal.color("error")}`)
		.setAuthor(d.Util.FetchLanguage(`error.${type}.title`, lang, d))
		.setFooter(d.Util.FetchLanguage("error.footer", lang, d))
		.setDescription(d.Util.FetchLanguage(`error.${type}.message`, lang, d));

	//@ts-ignore
	if (d.interaction) return await d.interaction.reply({ content: null, embeds: [ErrorEmbed], ephemeral: true });
	return await d.Util.reply(d, { content: null, embeds: [ErrorEmbed] });
};

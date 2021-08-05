// @ts-nocheck
'use strict';
const GuildChannel = require('./GuildChannel');
/**
 * Represents a guild category channel on Discord.
 * @extends {GuildChannel}
 */
class CategoryChannel extends GuildChannel {
    /**
     * Channels that are a part of this category
     * @type {Collection<Snowflake, GuildChannel>}
     * @readonly
     */
    get children() {
        return this.guild.channels.cache.filter(c => c.parentId === this.id);
    }
}
module.exports = CategoryChannel;
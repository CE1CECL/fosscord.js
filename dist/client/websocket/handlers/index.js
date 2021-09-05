// @ts-nocheck
'use strict';

const { WSEvents } = require('../../../util/Constants');

const handlers = {};

handlers['APPLICATION_COMMAND_CREATE'] = require('./APPLICATION_COMMAND_CREATE.js');
handlers['APPLICATION_COMMAND_DELETE'] = require('./APPLICATION_COMMAND_DELETE.js');
handlers['APPLICATION_COMMAND_UPDATE'] = require('./APPLICATION_COMMAND_UPDATE.js');
handlers['CHANNEL_CREATE'] = require('./CHANNEL_CREATE.js');
handlers['CHANNEL_DELETE'] = require('./CHANNEL_DELETE.js');
handlers['CHANNEL_PINS_UPDATE'] = require('./CHANNEL_PINS_UPDATE.js');
handlers['CHANNEL_UPDATE'] = require('./CHANNEL_UPDATE.js');
handlers['GUILD_BAN_ADD'] = require('./GUILD_BAN_ADD.js');
handlers['GUILD_BAN_REMOVE'] = require('./GUILD_BAN_REMOVE.js');
handlers['GUILD_CREATE'] = require('./GUILD_CREATE.js');
handlers['GUILD_DELETE'] = require('./GUILD_DELETE.js');
handlers['GUILD_EMOJIS_UPDATE'] = require('./GUILD_EMOJIS_UPDATE.js');
handlers['GUILD_INTEGRATIONS_UPDATE'] = require('./GUILD_INTEGRATIONS_UPDATE.js');
handlers['GUILD_MEMBER_ADD'] = require('./GUILD_MEMBER_ADD.js');
handlers['GUILD_MEMBER_REMOVE'] = require('./GUILD_MEMBER_REMOVE.js');
handlers['GUILD_MEMBER_UPDATE'] = require('./GUILD_MEMBER_UPDATE.js');
handlers['GUILD_MEMBERS_CHUNK'] = require('./GUILD_MEMBERS_CHUNK.js');
handlers['GUILD_ROLE_CREATE'] = require('./GUILD_ROLE_CREATE.js');
handlers['GUILD_ROLE_DELETE'] = require('./GUILD_ROLE_DELETE.js');
handlers['GUILD_ROLE_UPDATE'] = require('./GUILD_ROLE_UPDATE.js');
handlers['GUILD_STICKERS_UPDATE'] = require('./GUILD_STICKERS_UPDATE.js');
handlers['GUILD_UPDATE'] = require('./GUILD_UPDATE.js');
handlers['INTERACTION_CREATE'] = require('./INTERACTION_CREATE.js');
handlers['INVITE_CREATE'] = require('./INVITE_CREATE.js');
handlers['INVITE_DELETE'] = require('./INVITE_DELETE.js');
handlers['MESSAGE_CREATE'] = require('./MESSAGE_CREATE.js');
handlers['MESSAGE_DELETE'] = require('./MESSAGE_DELETE.js');
handlers['MESSAGE_DELETE_BULK'] = require('./MESSAGE_DELETE_BULK.js');
handlers['MESSAGE_REACTION_ADD'] = require('./MESSAGE_REACTION_ADD.js');
handlers['MESSAGE_REACTION_REMOVE'] = require('./MESSAGE_REACTION_REMOVE.js');
handlers['MESSAGE_REACTION_REMOVE_ALL'] = require('./MESSAGE_REACTION_REMOVE_ALL.js');
handlers['MESSAGE_REACTION_REMOVE_EMOJI'] = require('./MESSAGE_REACTION_REMOVE_EMOJI.js');
handlers['MESSAGE_UPDATE'] = require('./MESSAGE_UPDATE.js');
handlers['PRESENCE_UPDATE'] = require('./PRESENCE_UPDATE.js');
handlers['READY'] = require('./READY.js');
handlers['RESUMED'] = require('./RESUMED.js');
handlers['STAGE_INSTANCE_CREATE'] = require('./STAGE_INSTANCE_CREATE.js');
handlers['STAGE_INSTANCE_DELETE'] = require('./STAGE_INSTANCE_DELETE.js');
handlers['STAGE_INSTANCE_UPDATE'] = require('./STAGE_INSTANCE_UPDATE.js');
handlers['THREAD_CREATE'] = require('./THREAD_CREATE.js');
handlers['THREAD_DELETE'] = require('./THREAD_DELETE.js');
handlers['THREAD_LIST_SYNC'] = require('./THREAD_LIST_SYNC.js');
handlers['THREAD_MEMBER_UPDATE'] = require('./THREAD_MEMBER_UPDATE.js');
handlers['THREAD_MEMBERS_UPDATE'] = require('./THREAD_MEMBERS_UPDATE.js');
handlers['THREAD_UPDATE'] = require('./THREAD_UPDATE.js');
handlers['TYPING_START'] = require('./TYPING_START.js');
handlers['USER_UPDATE'] = require('./USER_UPDATE.js');
handlers['VOICE_SERVER_UPDATE'] = require('./VOICE_SERVER_UPDATE.js');
handlers['VOICE_STATE_UPDATE'] = require('./VOICE_STATE_UPDATE.js');
handlers['WEBHOOKS_UPDATE'] = require('./WEBHOOKS_UPDATE.js');

module.exports = handlers;

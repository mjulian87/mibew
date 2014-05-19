/*
 Copyright 2005-2014 the original author or authors.
 Licensed under the Apache License, Version 2.0 (the "License").
 You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
*/
(function(){var k=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l.agent=k({1:function(a,e,c,d){return"away"},3:function(a,e,c,d){return"online"},5:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.status.away",{name:"l10n",hash:{},data:d})))},7:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.status.online",{name:"l10n",hash:{},data:d})))},
9:function(a,e,c,d){return","},compiler:[5,">= 2.0.0"],main:function(a,e,c,d){var b,f=this.escapeExpression,g='<span class="agent-status-';if((c=e["if"].call(a,a&&a.away,{name:"if",hash:{},fn:this.program(1,d),inverse:this.program(3,d),data:d}))||0===c)g+=c;g+=' inline-block" title="';if((c=e["if"].call(a,a&&a.away,{name:"if",hash:{},fn:this.program(5,d),inverse:this.program(7,d),data:d}))||0===c)g+=c;g+='"></span>'+f((b=e.name||a&&a.name,"function"===typeof b?b.call(a,{name:"name",hash:{},data:d}):
b));if((c=e.unless.call(a,a&&a.isLast,{name:"unless",hash:{},fn:this.program(9,d),inverse:this.noop,data:d}))||0===c)g+=c;return g},useData:!0});l.no_threads=k({compiler:[5,">= 2.0.0"],main:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return'<td class="no-threads" colspan="8">'+f((b=e.l10n||a&&a.l10n||c,b.call(a,"clients.no_clients",{name:"l10n",hash:{},data:d})))+"</td>"},useData:!0});l.no_visitors=k({compiler:[5,">= 2.0.0"],main:function(a,e,c,d){var b;c=e.helperMissing;
var f=this.escapeExpression;return'<td class="no-visitors" colspan="9">'+f((b=e.l10n||a&&a.l10n||c,b.call(a,"visitors.no_visitors",{name:"l10n",hash:{},data:d})))+"</td>"},useData:!0});l.queued_thread=k({1:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.speak",{name:"l10n",hash:{},data:d})))},3:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.view",
{name:"l10n",hash:{},data:d})))},5:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return f((b=e.l10n||a&&a.l10n||c,b.call(a,"chat.client.spam.prefix",{name:"l10n",hash:{},data:d})))+"&nbsp;"},7:function(a,e,c,d){var b;c=this.escapeExpression;return'<div class="first-message"><a href="javascript:void(0);" title="'+c((b=e.firstMessage||a&&a.firstMessage,"function"===typeof b?b.call(a,{name:"firstMessage",hash:{},data:d}):b))+'">'+c((b=e.firstMessagePreview||a&&a.firstMessagePreview,
"function"===typeof b?b.call(a,{name:"firstMessagePreview",hash:{},data:d}):b))+"</a></div>"},9:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return'\n            <div class="control open-dialog open-control inline-block" title="'+f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.speak",{name:"l10n",hash:{},data:d})))+'"></div>\n        '},11:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return'\n            <div class="control view-control inline-block" title="'+
f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.view",{name:"l10n",hash:{},data:d})))+'"></div>\n        '},13:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return'\n            <div class="control track-control inline-block" title="'+f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.tracked",{name:"l10n",hash:{},data:d})))+'"></div>\n        '},15:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return'\n            <div class="control ban-control inline-block" title="'+
f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.ban",{name:"l10n",hash:{},data:d})))+'"></div>\n        '},17:function(a,e,c,d){var b;c=this.escapeExpression;return'<a href="javascript:void(0);" class="geo-link" title="GeoLocation">'+c((b=e.remote||a&&a.remote,"function"===typeof b?b.call(a,{name:"remote",hash:{},data:d}):b))+"</a>"},19:function(a,e,c,d){var b;c=this.escapeExpression;return c((b=e.remote||a&&a.remote,"function"===typeof b?b.call(a,{name:"remote",hash:{},data:d}):b))},21:function(a,
e,c,d){var b;c=this.escapeExpression;return'<span class="timesince" data-timestamp="'+c((b=e.waitingTime||a&&a.waitingTime,"function"===typeof b?b.call(a,{name:"waitingTime",hash:{},data:d}):b))+'"></span>'},23:function(a,e,c,d){return"-"},25:function(a,e,c,d){var b;e=this.escapeExpression;return e((b=(b=a&&a.ban,null==b||!1===b?b:b.reason),"function"===typeof b?b.apply(a):b))},27:function(a,e,c,d){var b;c=this.escapeExpression;return c((b=e.userAgent||a&&a.userAgent,"function"===typeof b?b.call(a,
{name:"userAgent",hash:{},data:d}):b))},compiler:[5,">= 2.0.0"],main:function(a,e,c,d){var b,f=this.escapeExpression,g='<td class="visitor">\n    <div><a href="javascript:void(0);" class="user-name open-dialog" title="';if((c=e["if"].call(a,a&&a.canOpen,{name:"if",hash:{},fn:this.program(1,d),inverse:this.program(3,d),data:d}))||0===c)g+=c;g+='">';if((c=e["if"].call(a,a&&a.ban,{name:"if",hash:{},fn:this.program(5,d),inverse:this.noop,data:d}))||0===c)g+=c;g+=f((b=e.userName||a&&a.userName,"function"===
typeof b?b.call(a,{name:"userName",hash:{},data:d}):b))+"</a></div>\n    ";if((c=e["if"].call(a,a&&a.firstMessage,{name:"if",hash:{},fn:this.program(7,d),inverse:this.noop,data:d}))||0===c)g+=c;g+='\n</td>\n<td class="visitor">\n    <div class="default-thread-controls inline-block">\n        ';if((c=e["if"].call(a,a&&a.canOpen,{name:"if",hash:{},fn:this.program(9,d),inverse:this.noop,data:d}))||0===c)g+=c;g+="\n        ";if((c=e["if"].call(a,a&&a.canView,{name:"if",hash:{},fn:this.program(11,d),inverse:this.noop,
data:d}))||0===c)g+=c;g+="\n        ";if((c=e["if"].call(a,a&&a.tracked,{name:"if",hash:{},fn:this.program(13,d),inverse:this.noop,data:d}))||0===c)g+=c;g+="\n        ";if((c=e["if"].call(a,a&&a.canBan,{name:"if",hash:{},fn:this.program(15,d),inverse:this.noop,data:d}))||0===c)g+=c;g+='\n    </div>\n    <div class="thread-controls inline-block"></div>\n</td>\n<td class="visitor">';if((c=e["if"].call(a,a&&a.userIp,{name:"if",hash:{},fn:this.program(17,d),inverse:this.program(19,d),data:d}))||0===c)g+=
c;g+='</td>\n<td class="visitor">'+f((b=e.stateDesc||a&&a.stateDesc,"function"===typeof b?b.call(a,{name:"stateDesc",hash:{},data:d}):b))+'</td>\n<td class="visitor">'+f((b=e.agentName||a&&a.agentName,"function"===typeof b?b.call(a,{name:"agentName",hash:{},data:d}):b))+'</td>\n<td class="visitor"><span class="timesince" data-timestamp="'+f((b=e.totalTime||a&&a.totalTime,"function"===typeof b?b.call(a,{name:"totalTime",hash:{},data:d}):b))+'"></span></td>\n<td class="visitor">';if((c=e.unless.call(a,
a&&a.chatting,{name:"unless",hash:{},fn:this.program(21,d),inverse:this.program(23,d),data:d}))||0===c)g+=c;g+='</td>\n<td class="visitor">';if((c=e["if"].call(a,a&&a.ban,{name:"if",hash:{},fn:this.program(25,d),inverse:this.program(27,d),data:d}))||0===c)g+=c;return g+"</td>"},useData:!0});l.status_panel=k({1:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.status.away",{name:"l10n",hash:{},data:d})))},3:function(a,e,c,d){var b;
c=e.helperMissing;var f=this.escapeExpression;return f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.status.online",{name:"l10n",hash:{},data:d})))},5:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.status.setonline",{name:"l10n",hash:{},data:d})))},7:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.status.setaway",{name:"l10n",hash:{},data:d})))},compiler:[5,
">= 2.0.0"],main:function(a,e,c,d){var b,f;c=this.escapeExpression;c='<div id="connstatus">'+c((f=e.message||a&&a.message,"function"===typeof f?f.call(a,{name:"message",hash:{},data:d}):f));if((b=e["if"].call(a,(b=a&&a.agent,null==b||!1===b?b:b.away),{name:"if",hash:{},fn:this.program(1,d),inverse:this.program(3,d),data:d}))||0===b)c+=b;c+='</div><div id="connlinks"><a href="javascript:void(0);" id="change-status">';if((b=e["if"].call(a,(b=a&&a.agent,null==b||!1===b?b:b.away),{name:"if",hash:{},fn:this.program(5,
d),inverse:this.program(7,d),data:d}))||0===b)c+=b;return c+"</a></div>"},useData:!0});l.threads_collection=k({compiler:[5,">= 2.0.0"],main:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return'<table class="awaiting" border="0">\n<thead>\n<tr>\n    <th class="first">'+f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.head.name",{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.head.actions",{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+
f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.head.contactid",{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.head.state",{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.head.operator",{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.head.total",{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.head.waittime",
{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.head.etc",{name:"l10n",hash:{},data:d})))+'</th>\n</tr>\n</thead>\n<tbody id="threads-container">\n\n</tbody>\n</table>'},useData:!0});l.visitor=k({1:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return'<a href="javascript:void(0);" class="invite-link" title="'+f((b=e.l10n||a&&a.l10n||c,b.call(a,"pending.table.invite",{name:"l10n",hash:{},data:d})))+'">'+f((b=e.userName||a&&
a.userName,"function"===typeof b?b.call(a,{name:"userName",hash:{},data:d}):b))+"</a>"},3:function(a,e,c,d){var b;c=this.escapeExpression;return c((b=e.userName||a&&a.userName,"function"===typeof b?b.call(a,{name:"userName",hash:{},data:d}):b))},5:function(a,e,c,d){var b;c=this.escapeExpression;return'<a href="javascript:void(0);" class="geo-link" title="GeoLocation">'+c((b=e.remote||a&&a.remote,"function"===typeof b?b.call(a,{name:"remote",hash:{},data:d}):b))+"</a>"},7:function(a,e,c,d){var b;c=
this.escapeExpression;return c((b=e.remote||a&&a.remote,"function"===typeof b?b.call(a,{name:"remote",hash:{},data:d}):b))},9:function(a,e,c,d){var b;e=this.escapeExpression;return e((b=(b=a&&a.invitationInfo,null==b||!1===b?b:b.agentName),"function"===typeof b?b.apply(a):b))},11:function(a,e,c,d){return"-"},13:function(a,e,c,d){var b;e=this.escapeExpression;return'<span class="timesince" data-timestamp="'+e((b=(b=a&&a.invitationInfo,null==b||!1===b?b:b.time),"function"===typeof b?b.apply(a):b))+
'"></span>'},compiler:[5,">= 2.0.0"],main:function(a,e,c,d){var b,f=e.helperMissing,g=this.escapeExpression,h='<td class="visitor">\n    ';if((c=e.unless.call(a,a&&a.invitationInfo,{name:"unless",hash:{},fn:this.program(1,d),inverse:this.program(3,d),data:d}))||0===c)h+=c;h+='\n</td>\n<td class="visitor">\n    <div class="default-visitor-controls inline-block">\n        <div class="control track-control inline-block" title="'+g((b=e.l10n||a&&a.l10n||f,b.call(a,"pending.table.tracked",{name:"l10n",
hash:{},data:d})))+'"></div>\n    </div>\n    <div class="visitor-controls inline-block"></div>\n</td>\n<td class="visitor">';if((c=e["if"].call(a,a&&a.userIp,{name:"if",hash:{},fn:this.program(5,d),inverse:this.program(7,d),data:d}))||0===c)h+=c;h+='</td>\n<td class="visitor"><span class="timesince" data-timestamp="'+g((b=e.firstTime||a&&a.firstTime,"function"===typeof b?b.call(a,{name:"firstTime",hash:{},data:d}):b))+'"></span></td>\n<td class="visitor"><span class="timesince" data-timestamp="'+
g((b=e.lastTime||a&&a.lastTime,"function"===typeof b?b.call(a,{name:"lastTime",hash:{},data:d}):b))+'"></span></td>\n<td class="visitor">';if((c=e["if"].call(a,a&&a.invitationInfo,{name:"if",hash:{},fn:this.program(9,d),inverse:this.program(11,d),data:d}))||0===c)h+=c;h+='</td>\n<td class="visitor">';if((c=e["if"].call(a,a&&a.invitationInfo,{name:"if",hash:{},fn:this.program(13,d),inverse:this.program(11,d),data:d}))||0===c)h+=c;return h+'</td>\n<td class="visitor">'+g((b=e.invitations||a&&a.invitations,
"function"===typeof b?b.call(a,{name:"invitations",hash:{},data:d}):b))+" / "+g((b=e.chats||a&&a.chats,"function"===typeof b?b.call(a,{name:"chats",hash:{},data:d}):b))+'</td>\n<td class="visitor">'+g((b=e.userAgent||a&&a.userAgent,"function"===typeof b?b.call(a,{name:"userAgent",hash:{},data:d}):b))+"</td>"},useData:!0});l.visitors_collection=k({compiler:[5,">= 2.0.0"],main:function(a,e,c,d){var b;c=e.helperMissing;var f=this.escapeExpression;return'<table id="visitorslist" class="awaiting" border="0">\n<thead>\n<tr>\n    <th class="first">'+
f((b=e.l10n||a&&a.l10n||c,b.call(a,"visitors.table.head.name",{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+f((b=e.l10n||a&&a.l10n||c,b.call(a,"visitors.table.head.actions",{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+f((b=e.l10n||a&&a.l10n||c,b.call(a,"visitors.table.head.contactid",{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+f((b=e.l10n||a&&a.l10n||c,b.call(a,"visitors.table.head.firsttimeonsite",{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+f((b=e.l10n||a&&a.l10n||c,b.call(a,
"visitors.table.head.lasttimeonsite",{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+f((b=e.l10n||a&&a.l10n||c,b.call(a,"visitors.table.head.invited.by",{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+f((b=e.l10n||a&&a.l10n||c,b.call(a,"visitors.table.head.invitationtime",{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+f((b=e.l10n||a&&a.l10n||c,b.call(a,"visitors.table.head.invitations",{name:"l10n",hash:{},data:d})))+"</th>\n    <th>"+f((b=e.l10n||a&&a.l10n||c,b.call(a,"visitors.table.head.etc",
{name:"l10n",hash:{},data:d})))+'</th>\n</tr>\n</thead>\n<tbody id="visitors-container">\n</tbody>\n</table>'},useData:!0})})();

import '../imports/common/mongo/ChatRooms'

// ----- publications
import '../imports/server/publications/ChatRoomPublication'
import '../imports/server/publications/MessagePublication'

//  ----- messages
import '../imports/common/methods/CreateChatRoom'
// import '../imports/common/methods/SendMessage'
import '../imports/common/methods/SendMessageWithBot'
import '../imports/common/methods/SetAvatar'

//  ----- bots
// import '../imports/server/bots/ElizaChatBot'
import '../imports/server/bots/ElizaChatBotCool'
import '../imports/common/bots/SedBot'

//  ----- CommandBot commands
import '../imports/common/bots/commands/Clear'
import '../imports/common/bots/commands/DeleteChatRoom'
import '../imports/common/bots/commands/ListUsers'
import '../imports/common/bots/commands/RandomNumber'
import '../imports/common/bots/commands/RemoveLast'

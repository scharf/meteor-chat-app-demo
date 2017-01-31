import '../imports/common/ChatRooms'

// ----- publications
import '../imports/server/publications/ChatRoomPublication'
import '../imports/server/publications/MessagePublication'

//  ----- messages
import '../imports/common/methods/CreateChatRoom'
// import '../imports/common/methods/SendMessage'
import '../imports/common/methods/SendMessageWithBot'
import '../imports/common/methods/SetAvatar'

//  ----- bots
import '../imports/server/ElizaChatBot'
import '../imports/common/chatbots/SedBot'

//  ----- CommandBot commands
import '../imports/common/chatbots/commands/Clear'
import '../imports/common/chatbots/commands/DeleteChatRoom'
import '../imports/common/chatbots/commands/ListUsers'
import '../imports/common/chatbots/commands/RandomNumber'
import '../imports/common/chatbots/commands/RemoveLast'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Search, Send, Paperclip, Smile, MoreVertical,
  Phone, Video, Info, Circle
} from 'lucide-react'

const ChatHub = () => {
  const [selectedChat, setSelectedChat] = useState(1)
  const [message, setMessage] = useState('')

  const chats = [
    {
      id: 1,
      name: 'TechForGood NGO',
      avatar: 'T',
      lastMessage: 'Great! Looking forward to the interview',
      time: '2 min ago',
      unread: 2,
      online: true,
      type: 'organization'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      avatar: 'PS',
      lastMessage: 'Thank you for the opportunity!',
      time: '1 hour ago',
      unread: 0,
      online: false,
      type: 'volunteer'
    },
    {
      id: 3,
      name: 'HealthFirst Team',
      avatar: 'H',
      lastMessage: 'Documents received',
      time: '2 days ago',
      unread: 0,
      online: true,
      type: 'organization'
    }
  ]

  const messages = [
    {
      id: 1,
      sender: 'them',
      text: 'Hi! Thank you for applying to our Frontend Developer position.',
      time: '10:00 AM'
    },
    {
      id: 2,
      sender: 'me',
      text: 'Thank you for considering my application! I\'m very excited about this opportunity.',
      time: '10:05 AM'
    },
    {
      id: 3,
      sender: 'them',
      text: 'We reviewed your profile and would like to schedule an interview. Are you available this week?',
      time: '10:10 AM'
    },
    {
      id: 4,
      sender: 'me',
      text: 'Yes, I\'m available! Tuesday or Thursday works best for me.',
      time: '10:15 AM'
    },
    {
      id: 5,
      sender: 'them',
      text: 'Great! Looking forward to the interview',
      time: '10:20 AM'
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-3xl font-bold mb-2">Messages</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Connect with organizations and volunteers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Chat List */}
          <Card className="lg:col-span-1 overflow-hidden">
            <CardHeader className="pb-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-y-auto h-[calc(100vh-320px)]">
                {chats.map((chat) => (
                  <motion.div
                    key={chat.id}
                    whileHover={{ backgroundColor: 'rgba(139, 92, 246, 0.05)' }}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`p-4 cursor-pointer border-b border-gray-100 dark:border-gray-800 ${
                      selectedChat === chat.id ? 'bg-primary-50 dark:bg-primary-900/20' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          chat.type === 'organization' 
                            ? 'bg-gradient-to-r from-primary-500 to-secondary-500'
                            : 'bg-gradient-to-r from-green-500 to-teal-500'
                        }`}>
                          {chat.avatar}
                        </div>
                        {chat.online && (
                          <Circle className="absolute bottom-0 right-0 w-3 h-3 text-green-500 fill-current" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-semibold">{chat.name}</h3>
                          <span className="text-xs text-gray-500">{chat.time}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                            {chat.lastMessage}
                          </p>
                          {chat.unread > 0 && (
                            <Badge variant="default" className="ml-2">
                              {chat.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-2 overflow-hidden flex flex-col">
            {/* Chat Header */}
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                    {chats.find(c => c.id === selectedChat)?.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{chats.find(c => c.id === selectedChat)?.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {chats.find(c => c.id === selectedChat)?.online ? 'Active now' : 'Offline'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Phone size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Info size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical size={20} />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] ${
                                      msg.sender === 'me' ? 'order-1' : ''
                    }`}>
                      <div className={`px-4 py-2 rounded-2xl ${
                        msg.sender === 'me'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-800'
                      }`}>
                        <p className="text-sm">{msg.text}</p>
                      </div>
                      <p className={`text-xs mt-1 ${
                        msg.sender === 'me' ? 'text-right' : ''
                      } text-gray-500`}>
                        {msg.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>

            {/* Message Input */}
            <div className="border-t p-4">
              <form onSubmit={(e) => { e.preventDefault(); setMessage(''); }} className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Paperclip size={20} />
                </Button>
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1"
                />
                <Button variant="ghost" size="icon">
                  <Smile size={20} />
                </Button>
                <Button type="submit" variant="gradient" size="icon">
                  <Send size={20} />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ChatHub
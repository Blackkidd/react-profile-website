import { useState } from 'react'
import { Button, Card, Typography, Space } from 'antd'
import './App.css'

const { Title, Paragraph } = Typography

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="profile-container">
      <Title>Profile Website</Title>
      <Card style={{ maxWidth: 680, margin: '0 auto' }}>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Paragraph>
            Welcome to your profile. This is a minimal example using Ant Design.
          </Paragraph>
          <Button type="primary" onClick={() => setCount((c) => c + 1)}>
            Clicked {count} times
          </Button>
        </Space>
      </Card>
    </div>
  )
}

export default App

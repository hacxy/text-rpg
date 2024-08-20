import React, { useState } from 'react';
import { Button, Card, Cell, Form, Input, Popup } from 'react-vant';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { player } from '../../store';
import { observer } from 'mobx-react-lite';

const Login: React.FC = observer(() => {
  const [visible, setVisible] = useState(false);
  const [startType, setStartType] = useState<'New' | 'Old'>('New');
  const navigate = useNavigate();

  const onFinish = (data: { playerName?: string; recordCode?: string }) => {
    setVisible(false);
    player.register(data.playerName || '');
    navigate('/home');
  };

  const formContent = () => {
    if (startType === 'New') {
      return (
        <Form
          onFinish={onFinish}
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType="submit" type="primary" block>
                提交
              </Button>
            </div>
          }
        >
          <Form.Item
            label="玩家名称"
            name="playerName"
            rules={[
              {
                required: true,
                message: '请输入玩家名称'
              },
              { min: 2, max: 6, message: '名称最少两个字, 最多6个字' }
            ]}
          >
            <Input placeholder="请输入玩家名称" minLength={6} />
          </Form.Item>
        </Form>
      );
    } else {
      return (
        <Form
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType="submit" type="primary" block>
                提交
              </Button>
            </div>
          }
        >
          <Form.Item label="存档代码">
            <Input.TextArea placeholder="请输入存档代码" autoSize={{ maxHeight: 200 }} />
          </Form.Item>
        </Form>
      );
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <Card>
        <Card.Header>🎮 Text RPG</Card.Header>
        <Card.Body>
          <Cell
            title="🗡️ 新的开始"
            isLink
            onClick={() => {
              setStartType('New');
              setVisible(true);
            }}
          />
          <Cell
            title="📃 读取存档"
            isLink
            onClick={() => {
              setStartType('Old');
              setVisible(true);
            }}
          />

          <Popup
            style={{
              paddingBottom: '10px',
              minWidth: '300px'
            }}
            round
            destroyOnClose
            lockScroll
            closeOnPopstate
            visible={visible}
            title={startType === 'New' ? '新建存档' : '读取存档'}
            closeable
            onClose={() => setVisible(false)}
          >
            {formContent()}
          </Popup>
        </Card.Body>
      </Card>
    </div>
  );
});
Login.displayName = 'Login';
export default Login;

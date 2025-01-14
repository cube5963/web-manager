// src/pages/Home.tsx
import { useState } from 'react';
import { Button } from 'antd';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
        <Button type="primary">Button</Button>
    </div>
  );
}

import React, { Suspense } from 'react';

const UserList = React.lazy(() => import('./UserList'));
const PostList = React.lazy(() => import('./PostList'));

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Lazy Loading Components Demo (React 18 & Suspense)</h1>
      <Suspense fallback={<div style={{ textAlign: 'center', fontSize: '20px', padding: '40px', color: '#6c757d' }}>Loading Lazy Components...</div>}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div>
            <UserList />
          </div>
          <div>
            <PostList />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;

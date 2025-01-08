```javascript
// pages/index.js
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  
  const handleAboutClick = () => {
    router.push('/about');
  };

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <button onClick={handleAboutClick}>
        Go to About Page
      </button>
    </div>
  );
}
```
```javascript
//pages/about.js

export default function About(){
    return(
        <h1>About Page</h1>
    );
}
```
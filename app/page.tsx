import DrowsinessMonitor from '@/components/DrowsinessMonitor';

export default function Home() {
  return (
    <>
      <DrowsinessMonitor />
      
      {/* Auto-cleanup trigger - runs every 30 minutes */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            setInterval(() => {
              fetch('/api/cleanup-session')
                .then(res => res.json())
                .then(data => console.log('Auto-cleanup:', data))
                .catch(err => console.error('Auto-cleanup error:', err));
            }, 30 * 60 * 1000); // 30 minutes
          `
        }}
      />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import "./desktop.css";
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Progressbar from '../../features/ProgressBar/Progressbar';
import Bar from '../../features/DTaskbar/Bar/Bar';
import Card from 'react-bootstrap/Card';
const Home = () => {
  const [progress, setProgress] = useState(0);
  const MAX_PROGRESS = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        console.log('prevProgress', prevProgress);
        const newProgress = prevProgress + 10;
        if (newProgress === MAX_PROGRESS) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 500);


    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className='desktop-container'>
      <div>Loading....</div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>World Class Mochi</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Do you Choose this dog?</Card.Subtitle>
          <Card.Text>
            Lovely fur and a great personality.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>

      {/* <progress value={progress} max={MAX_PROGRESS}/> */}
      <Button variant="primary">Primary</Button>
      <div style={{ border: 'solid 2px hotpink', width: '15rem', zIndex: `1`}}>
      <ProgressBar max={MAX_PROGRESS} variant='success' now={progress} />
      </div>

    </div>
      <Bar/>
    </>
    
  );
};

export default Home;

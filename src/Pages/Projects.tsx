import React from 'react';
import { Button, Card, CardContent, Container, Grid, Typography, CardActions } from '@mui/material';
import tjprohammerweb from '../../assets/tjprohammerweb.png';
import thealpinestudioweb from '../../assets/thealpinestudioweb.png';
import fileupload from '../../assets/file-upload.png';
interface Project {
    title: string;
    image: string;
    url: string;
    title_description: string;
    description: string;
}

const projects: Project[] = [
    {
        title: 'tjprohammer.us',
        image: tjprohammerweb,
        url: 'https://www.tjprohammer.us',
        title_description: 'TJ Prohammer Nature Photography',
        description:
            'Crafted a responsive website, optimized for performance and user experience. Implemented the MERN stack, with MongoDB Atlas, Express.js, React, and Node.js, and integrated Stripe for secure payment processing. Engineered a scalable architecture to handle high traffic and data volumes. Utilized Docker for consistent development environments and seamless deployment. Established a CI/CD pipeline using Jenkins, enhancing development efficiency, minimizing deployment errors, and enabling quicker releases. Hosted the site on AWS EC2, leveraging Linux AMI and NGINX for superior security and performance.'
    },
    {
        title: 'thealpinestudio.com',
        image: thealpinestudioweb,
        url: 'https://thealpinestudio.com',
        title_description: 'The Alpine Studio',
        description:
            'Developed a robust infrastructure for an online studio platform, emphasizing scalability and reliability. Utilized Terraform for architecture on AWS, incorporating AWS Lambda for serverless computing, API Gateway for API management, and AWS S3 for storage. Integrated Stripe API for payment processing, with the application developed in TypeScript and Golang. Showcased advanced skills in cloud infrastructure and deployment strategies through architectural design and deployment of a scalable, reliable AWS infrastructure.'
    },
    {
        title: 'File Upload to S3',
        image: fileupload,
        url: 'https://upload.tjprohammer.us',
        title_description: 'File Upload Service',
        description:
            'Designed and built a serverless file upload service, leveraging AWS Lambda for serverless file processing and S3 for secure storage. Utilized API Gateway for endpoint management and AWS Cognito for user authentication. Developed the service using TypeScript and Python, demonstrating expertise in microservices, cloud functions, user authentication, and secure data handling.'
    }
];
const Projects = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 700);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container ref={ref} style={{ opacity: 1 }}>
            <Container
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    pt: 24,
                    margin: 'auto'
                }}>
                <Typography
                    id="/projects"
                    variant="h2"
                    color="secondary"
                    sx={{ pb: 2, textAlign: 'center', letterSpacing: '.08em' }}>
                    Projects
                </Typography>
                <hr />
                <Typography
                    variant="body1"
                    sx={{ pb: 6, letterSpacing: '.08em', textAlign: 'center' }}>
                    Fully build projects I have built
                </Typography>
            </Container>
            <Container
                sx={{
                    maxWidth: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}>
                <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 3, sm: 2, md: 3 }}
                    sx={{
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: isMobile ? 'center' : 'center',
                        justifyContent: isMobile ? 'center' : 'center'
                    }}>
                    {projects.map((project, index) => (
                        <Grid item xs={10} sm={6} key={index}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    boxShadow:
                                        '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
                                }}>
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <img
                                       style={{
                                        width: '100%', // Full width of the card
                                        height: '100%', // Fixed height for consistency
                                        objectFit: 'cover', // Cover the fixed height area
                                        objectPosition: 'center' // Center the image
                                    }}
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </a>
                                <CardContent
                                    sx={{
                                        flexGrow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'start',
                                        padding: '16px', // Ensure consistent padding
                                        '&:last-child': {
                                            paddingBottom: '16px'
                                        }
                                    }}>
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{
                                            letterSpacing: '.08em',
                                            fontSize: '1rem', // Adjust font size for mobile
                                            fontWeight: 'bold',
                                            marginBottom: '8px',
                                            lineHeight: '1.25' // Adjust line height for better readability
                                        }}>
                                        {project.title_description || project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            letterSpacing: '.08em',
                                            display: 'block', // Make sure the text is not hidden
                                            marginBottom: '16px' // Add some space before the buttons
                                        }}>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* Placeholder for action buttons */}
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};
export default Projects;

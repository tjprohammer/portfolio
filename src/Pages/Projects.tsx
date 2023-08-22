import React from 'react';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import tjprohammerweb from '../../assets/tjprohammerweb.png';
import thealpinestudioweb from '../../assets/thealpinestudioweb.png';
import fileupload from '../../assets/file-upload.png';
interface Project {
    title: string;
    image: string;
    url: string;
}

const projects: Project[] = [
    {
        title: 'tjprohammer.us',
        image: tjprohammerweb,
        url: 'https://www.tjprohammer.us'
    },
    {
        title: 'thealpinestudio.com',
        image: thealpinestudioweb,
        url: 'https://thealpinestudio.com'
    },
    {
        title: 'File Upload to S3',
        image: fileupload,
        url: 'https://upload.tjprohammer.us'
    },
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
                    sx={{ pb: 2, textAlign: 'center' }}>
                    Projects
                </Typography>
                <hr />
                <Typography variant="body1" sx={{ pb: 6, textAlign: 'center' }}>
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
                            <Card  sx={{ justifyContent: 'center', display: 'flex', boxShadow: "0px 2px 1px 2px rgb(0 0 0 / 40%), 0px 4px 2px 0px rgb(0 0 0 / 14%), 0px 1px 4px 0px rgb(0 0 0 / 12%)"}}>
                                <CardContent
                                
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        cursor: 'pointer'
                                    }}>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        <img
                                            height="auto"
                                            width="100%"
                                            style={{ objectFit: 'contain', padding: 2 }}
                                            src={project.image}
                                            alt={project.title}
                                        />
                                    </a>
                                    <Typography variant="body1">{project.title}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};
export default Projects;

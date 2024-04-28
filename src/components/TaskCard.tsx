import {
    Box,
    Card,
    CardContent,
    Typography,
    Avatar,
    Chip,
    CardHeader,
    IconButton,
  } from "@mui/material";
  import {
    Brush as BrushIcon,
    MoreVert as MoreVertIcon,
    EventAvailable as EventAvailableIcon,
  } from "@mui/icons-material";
import { TaskTypes } from "../pages/Admin/AdminDashboard";


type TaskCardProps = {
    task: TaskTypes; // Specify that the task prop should be of type Task
  };
  
  const TaskCard: React.FC<TaskCardProps>  = ({ task }) => {
    const { title, description, createdDate, priority, manager } = task;
  
    return (
      <>
        <Card sx={adminCardStyles.mainContainer}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            avatar={<BrushIcon sx={adminCardStyles.brushIcon} />}
            title={
              <Typography variant="h4" sx={adminCardStyles.title}>
                {title}
              </Typography>
            }
            subheader={
              <Typography sx={adminCardStyles.description}>
                {description}
              </Typography>
            }
          />
          <CardContent>
            <Box sx={adminCardStyles.subContainer}>
              <Box sx={adminCardStyles.dateContiner}>
                <EventAvailableIcon />
                <Typography  sx={adminCardStyles.addedText}>
                  Added:{" "}
                  <span style={adminCardStyles.dateText}>{createdDate}</span>
                </Typography>
              </Box>
              <Box sx={adminCardStyles.dateContiner}>
                <EventAvailableIcon />
                <Typography  sx={adminCardStyles.addedText}>
                  DeadLine:{" "}
                  <span style={adminCardStyles.dateText}>{createdDate}</span>
                </Typography>
              </Box>
            </Box>
            <Box sx={adminCardStyles.managerDetailsContainer}>
              <Box sx={adminCardStyles.flexCenter}>
                <Avatar sx={adminCardStyles.avatar} />
                <Typography variant="h6" sx={adminCardStyles.managerName}>
                  {manager}
                </Typography>
              </Box>
              <Chip label={priority} sx={adminCardStyles.chipStyles} />
            </Box>
          </CardContent>
        </Card>
      </>
    );
  };
  
  export default TaskCard;
  
  const adminCardStyles = {
    mainContainer: {
      border: "1px solid black",
      borderRadius: "10px",
    },
    title: {
      fontSize: 20,
      fontWeight: 600,
      color: "#344054",
      fontFamily: "Sans-Black",
    },
    description: {
      fontSize: 16,
      fontWeight: 400,
      color: "#344054",
      fontFamily: "Sans-regular",
    },
    brushIcon: {
      width: 30,
      height: 30,
      backgroundColor: "#7F56D9",
      padding: "10px",
      color: "#fff",
      borderRadius: "10px",
    },
    addedText: {
      color: "#9DA6B6",
      fontFamily: "Sans-regular",
      fontWeight: 600,
      fontSize: 14,
    },
    dateText: {
      color: "#475467",
      fontFamily: "Sans-regular",
      fontWeight: 600,
      fontSize: 14,
    },
    dateContiner: {
      display: "flex",
      alignItems: "center",
      gap: 0.5,
    },
    subContainer: {
      display: "flex",
      alignItems: "center",
      padding: "10px",
      gap: 2,
    },
    managerName: {
      color: "#475467",
      fontFamily: "Sans-regular",
      fontWeight: 600,
      fontSize: 18,
    },
    managerDetailsContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 1,
      padding: "10px",
    },
    avatar: {
      width: 24,
      height: 24,
    },
    chipStyles: {
      color: "white",
      backgroundColor: "green",
      fontFamily: "Sans-regular",
      fontWeight: "bold",
    },
    flexCenter: {
      display: "flex",
      alignItems: "center",
      gap: 1,
    },
  };
  
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Box, Card } from '@material-ui/core';
import mob1 from '../img/mob/1.png'
import mob2 from '../img/mob/2.png'
import ent1 from '../img/ent/1.png'
import ent2 from '../img/ent/2.png'
import ent3 from '../img/ent/3.png'
import ent4 from '../img/ent/4.png'
import cons1 from '../img/cons/1.png'
import cons2 from '../img/cons/2.png'
import wib1 from '../img/wib/1.png'
import wib2 from '../img/wib/2.png'
import wib3 from '../img/wib/3.png'
import db1 from '../img/db/1.png'
import db2 from '../img/db/2.png'
import db3 from '../img/db/3.png'
import group1 from '../img/group/1.png'
import group2 from '../img/group/2.png'
import group3 from '../img/group/3.png'
import group4 from '../img/group/4.png'
import group5 from '../img/group/5.png'
import group6 from '../img/group/6.png'
import group7 from '../img/group/7.png'
import group8 from '../img/group/8.png'
import group9 from '../img/group/9.png'
import group10 from '../img/group/10.png'
import group11 from '../img/group/11.png'
import hcm1 from '../img/hcm/1.png'
import hcm2 from '../img/hcm/2.png'
import fin1 from '../img/fin/1.png'
import fin2 from '../img/fin/2.png'
import nits1 from '../img/nits/1.png'
import nits2 from '../img/nits/2.png'
import nits3 from '../img/nits/3.png'
import sp1 from '../img/sp/1.png'
import sp2 from '../img/sp/2.png'
import sp3 from '../img/sp/3.png'
import gct1 from '../img/gct/1.png'
import gct2 from '../img/gct/2.png'

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles({
    media: {
      width: 1000,
      height: 563,
      
    },
    clickableIcon:{
        color: 'grey',
        '&:hover': {
        color: 'black',
        },
    },
    card: {
        maxWidth: 1200,
      },
  });

const identifier = {
    group: [group1,group2,group3,group4,group5,group6,group7,group8,group9,group10,group11],
    mob: [mob1,mob2],
    ent:[ent1,ent2,ent3,ent4],
    cons:[cons1,cons2],
    wib:[wib1,wib2,wib3],
    fin:[fin1,fin2],
    db:[db1,db2,db3],
    nits:[nits1,nits2,nits3],
    hcm:[hcm1,hcm2],
    sp:[sp1,sp2,sp3],
    gct:[gct1,gct2]
    
}

export default function SlideFrame(){
    const location = useLocation()
    const [count, setCount] = React.useState(0)
    var tagging = location.pathname.substring(1)
    if (tagging===""){
        tagging='group'
    }
    const handleLeft=()=>{
        if(count === 0){

        }
        else{
            setCount(count-1)
        }
    }
    const handleRight=()=>{
        if(count === identifier[tagging].length-1){

        }
        else{
            setCount(count+1)
        }
    }
    const classes = useStyles();

        return(

            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" >
                <ChevronLeftIcon onClick= {handleLeft}className={classes.clickableIcon} button fontSize="large"/>
                <Card className={classes.card}>
                    <CardMedia
                            className={classes.media}
                            image={identifier[tagging][count]}
                    />
                </Card>

                 <ChevronRightIcon onClick ={handleRight} className={classes.clickableIcon} fontSize = "large"/>
            </Box>
 
        )
    
}
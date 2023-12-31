import nobis2 from "../images/nobis2.png";
import repeat from "../images/REPEAT.png";
import vesa from "../images/vesa.jpg";
import core from "../images/core.jpg";
import perfect from "../images/perfect.jpg";
import lake from "../images/lake.jpg";
import fitalb from "../images/fitalb.jpg";
import angels from "../images/angels.jpg";
import expres from "../images/fitexpres.jpeg";
import fit21 from "../images/crosfit21.jpeg";
import alfa from "../images/alfa.jpeg";
import zorba from "../images/zorba.jpeg";
import stamina from "../images/stamina.jpeg";
import limitles from "../images/limitless.jpeg";
import arena from "../images/arena.jpeg";
import magnet from "../images/magnet.jpeg";

const db_data = [
    {
        id: 1,
        src: nobis2,
        secsrc: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Nobis Wellness Center",
        description: "Switch Gym is run by Jill and Jonatan Westin. A genuine couple who have dedicated their lives to training. The gym is small and personal, located in a basement a short walk from St. Eriksplan. The focus is on training in small groups of 6-15 people depending",
        opening: "09:00 - 21:00",
        rating: 5,
        gym_plan: true,
        adress: "Diga e liqenit",
        gym_features: ["SPA", "Yoga", "Cross Fit"],
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        zone: 1,
        category: 1
    },
    {
        id: 2,
        src: repeat,
        secsrc: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Repeat Fitness Tirana",
        description: "The gym is small and personal, located in a basement a short walk from St. Eriksplan. The focus is on training in small groups of 6-15 people depending",
        opening: "09:00 - 21:00",
        rating: 5,
        gym_plan: true,
        adress: "Diga e liqenit",
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        zone: 2,
        category: 1
    },
    {
        id: 3,
        src: vesa,
        name: "Vesa SPA&Fitness",
        zone: 2,
        category: 1,
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    {
        id: 4,
        src: core,
        name: "Core Pilates",
        zone: 1,
        category: 3,
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    {
        id: 5,
        src: perfect,
        name: "Palestra Perfect Fitness",
        zone: 1,
        category: 2,
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    {
        id: 6,
        src: lake,
        name: "Lake Fitness",
        zone: 1,
        category: 3,
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    {
        id: 7,
        src: fitalb,
        name: "FitAlb GYM",
        zone: 2,
        category: 2,
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    {
        id: 8,
        src: angels,
        name: "Angel's Fitness Gym",
        zone: 2,
        category: 3,
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    {
        id: 9,
        src: expres,
        name: "Fit Express Tirana",
        zone: 2,
        category: 1,
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    {
        id: 10,
        src: fit21,
        name: "Fit 21shi Athlete",
        zone: 2,
        category: 3,
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    {
        id: 11,
        src: alfa,
        name: "Alpha CrossFit Tirana ",
        zone: 2,
        category: 2,
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    {
        id: 12,
        src: zorba,
        name: "ZORBA Fitness Club",
        zone: 1,
        category: 2,
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    {
        id: 13,
        src: stamina,
        name: "Crossfit stamina",
        zone: 1,
        category: 3,
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    {
        id: 14,
        src: limitles,
        name: "Limitless Fitness Tirana",
        zone: 1,
        category: 3,
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    {
        id: 15,
        src: arena,
        name: "Arena Boxing and Fitness",
        zone: 1,
        category: 1,
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    {
        id: 16,
        src: magnet,
        name: "Magnet fit and gym",
        zone: 2,
        category: 3,
        gym_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },


]
export default db_data;
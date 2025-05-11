import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate, useLoaderData } from "react-router-dom";
import { editPlayer } from "../../../../utils/api/players.js";

import "./EditPlayer.css";

function EditPlayer(){
    console.log("hola");
    const playerDataDefault = useLoaderData();
    const { id } = useParams();
    console.log('Editando jugador con id:', id);
    const [playerData,setPlayerData] = useState({
            "team_id": playerDataDefault.team_id,
            "nif": playerDataDefault.nif,
            "name": playerDataDefault.name,
            "surname1": playerDataDefault.surname1,
            "surname2": playerDataDefault.surname2,
            "phone": playerDataDefault.phone,
            "address": playerDataDefault.address,
            "position": playerDataDefault.position,
            "height": playerDataDefault.height,
            "hand": playerDataDefault.hand,
            "status": playerDataDefault.status,
    });

    const navigate = useNavigate();
    
    const handleTeamId = (e) => {
        const team_id = e.target.value;
        setPlayerData((oldPlayer) => {
            return {...oldPlayer,team_id: team_id}
        });
    }
    const handleNif = (e) => {
        const nif = e.target.value;
        setPlayerData((oldPlayer) => {
            return {...oldPlayer,nif: nif}
        });
    }
    const handleName = (e) => {
        const name = e.target.value;
        setPlayerData((oldPlayer) => {
            return {...oldPlayer,name: name}
        });
    }
    const handleSurname1 = (e) => {
        const surname1 = e.target.value;
        setPlayerData((oldPlayer) => {
            return {...oldPlayer,surname1: surname1}
        });
    }
    const handleSurname2 = (e) => {
        const surname2 = e.target.value;
        setPlayerData((oldPlayer) => {
            return {...oldPlayer,surname2: surname2}
        });
    }
    const handlePhone = (e) => {
        const phone = e.target.value;
        setPlayerData((oldPlayer) => {
            return {...oldPlayer,phone: phone}
        });
    }
    const handleAddress = (e) => {
        const address = e.target.value;
        setPlayerData((oldPlayer) => {
            return {...oldPlayer,address: address}
        });
    }
    const handlePosition = (e) => {
        const position = e.target.value;
        setPlayerData((oldPlayer) => {
            return {...oldPlayer,position: position}
        });
    }
    const handleHeight = (e) => {
        const height = e.target.value;
        setPlayerData((oldPlayer) => {
            return {...oldPlayer,height: height}
        });
    }
    const handleHand = (e) => {
        const hand = e.target.value;
        setPlayerData((oldPlayer) => {
            return {...oldPlayer,hand: hand}
        });
    }
    const handleStatus = (e) => {
        const status = e.target.value;
        setPlayerData((oldPlayer) => {
            return {...oldPlayer,status: status}
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await editPlayer(playerDataDefault.player_id,playerData);
        navigate("/admin/players",{replace: true});
        console.log("gola"+response);
    }

    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
          {/* Fila 1: Nombre, Apellido 1, Apellido 2 */}
          <div className="row">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" value={playerData.name} onChange={handleName} />
            </div>
            <div>
              <label htmlFor="surname1">Surname 1</label>
              <input type="text" name="surname1" id="surname1" value={playerData.surname1} onChange={handleSurname1} />
            </div>
            <div>
              <label htmlFor="surname2">Surname 2</label>
              <input type="text" name="surname2" id="surname2" value={playerData.surname2} onChange={handleSurname2} />
            </div>
          </div>
      
          {/* Fila 2: NIF y Teléfono */}
          <div className="row">
            <div>
              <label htmlFor="nif">NIF</label>
              <input type="text" name="nif" id="nif" value={playerData.nif} onChange={handleNif} />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" id="phone" value={playerData.phone} onChange={handlePhone} />
            </div>
          </div>
      
          {/* Fila 3: Dirección */}
          <div className="row single">
            <div>
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" value={playerData.address} onChange={handleAddress} />
            </div>
          </div>
      
          {/* Fila 4: Altura y Mano */}
          <div className="row">
            <div>
              <label htmlFor="height">Height</label>
              <input type="number" id="height" name="height" value={playerData.height} onChange={handleHeight} min="100" max="250" />
            </div>
            <div>
              <label htmlFor="hand">Hand</label>
              <select name="hand" id="hand" value={playerData.hand} onChange={handleHand}>
                <option value="left-handed">Left-Handed</option>
                <option value="right-handed">Right-handed</option>
              </select>
            </div>
          </div>
      
          {/* Fila 5: Equipo, Posición, Status */}
          <div className="row">
            <div>
              <label htmlFor="team_id">Team</label>
              <select name="team_id" id="team_id" value={playerData.team_id} onChange={handleTeamId}>
                <option value="1">LaSalle Eagles</option>
                <option value="2">LaSalle Warriors</option>
                <option value="3">LaSalle Stars</option>
                <option value="4">LaSalle Lions</option>
                <option value="5">LaSalle Tigers</option>
                <option value="6">LaSalle Phanters</option>
              </select>
            </div>
            <div>
              <label htmlFor="position">Position</label>
              <select name="position" id="position" value={playerData.position} onChange={handlePosition}>
                <option value="point-guard">Point-Guard</option>
                <option value="shooting-guard">Shooting-Guard</option>
                <option value="small-forward">Small-Forward</option>
                <option value="power-forward">Power-Forward</option>
                <option value="center">Center</option>
              </select>
            </div>
            <div>
              <label htmlFor="status">Status</label>
              <select name="status" id="status" value={playerData.status} onChange={handleStatus}>
                <option value="in">In</option>
                <option value="out">Out</option>
              </select>
            </div>
          </div>
      
          {/* Botón de envío */}
          <button>Edit</button>
        </form>
      </div>
      
    );
    
}

export default EditPlayer;
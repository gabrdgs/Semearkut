import styled from "styled-components";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/SemearkutCommons';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';


function ProfileSideBar(propriedades) {
  return(
    <Box>
    <img src = {`https://github.com/${propriedades.githubUser}.png`} style = {{ borderRadius: '8px'}}/>
  </Box>
  ) 
}

export default function Home() {
  const githubUser = 'gabrdgs';
  const pessoasFavoritas = [
    'techsemear',
    'ViniciusVinna',
    'jessicagonsalves',
    ]

  return (
  <>
  <AlurakutMenu/>  
  <MainGrid>
    <div className="profileArea" style = {{gridArea:'profileArea'}}>
        <ProfileSideBar githubUser = {githubUser} />
    </div>
    <div  className = "welcomeArea" style = {{gridArea:'welcomeArea'}}>
      <Box>
        <h1 className = "title">
          Bem Vindo(a)
        </h1>
      <OrkutNostalgicIconSet/>
      
      </Box>
    </div>
    <div className = "profileRelationsArea" style = { {gridArea:'profileRelationsArea'}}>
      <ProfileRelationsBoxWrapper>
        <h2 className = "smallTitle">
          Pessoas da Comunidade ({pessoasFavoritas.length})
        </h2>
        
        <ul>
          {pessoasFavoritas.slice(0,6).map((itemAtual) => {
            return (
              <li key={itemAtual}>
                <a href={`/users/${itemAtual}`}>
                  <img src={`https://github.com/${itemAtual}.png`} />
                  <span>{itemAtual}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>
    </div>
  </MainGrid>
  </>
  );
}

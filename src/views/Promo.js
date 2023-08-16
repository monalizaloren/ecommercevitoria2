import React, { Component } from 'react';
import Woman from '../assets/woman (1).png';
import Kids from '../assets/kids.png';
import Shoe from '../assets/shoe.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quantfem: 0,
      Quantmasc: 0,
      Quantinf: 0,
      Quantcalç: 0,
    };
  }

  aumentarfun = () => {
    this.setState({ Quantfem: this.state.Quantfem + 1 });
  };

  adcfun = () => {
    this.setState({ Quantmasc: this.state.Quantmasc + 1 });
  };

  ampliarfun = () => {
    this.setState({ Quantinf: this.state.Quantinf + 1 });
  };

  crescerfun = () => {
    this.setState({ Quantcalç: this.state.Quantcalç + 1 });
  };

  render() {
    const { Quantfem, Quantmasc, Quantinf, Quantcalç } = this.state;

    return (
      <div className="caixas">
        <div className="guardar">
          <div className="box1">
            <div className="info">
              <div className="imagem">
                <img className="imagem1" src={Woman} alt="Woman" />
              </div>
              <div>
                <p className="Feminino">Feminino</p>
              </div>
              <h6 className="Valor"> A partir de $69,99. </h6>
              <p className="Femdescric">
                Aproveite 20% de desconto na categoria feminina.{' '}
              </p>
              <p className="Itens"> Itens: {Quantfem}</p>
              <button className="Aumentarfun" onClick={this.aumentarfun}>
                Adicionar
              </button>
            </div>
          </div>
        </div>

        <div className="box3">
          <div className="info">
            <div className="img3">
              <img className="imagem3" src={Kids} alt="Kids" />
            </div>
            <p className="Infantil">Infantil</p>
            <h6 className="Valor3"> A partir de R$29,99. </h6>
            <p className="Infantdescric">
              Aproveite 30% de desconto na categoria infantil.{' '}
            </p>
            <p className="Itens3">Itens: {Quantinf} </p>
            <button className="Aumentarfun3" onClick={this.ampliarfun}>
              Adicionar
            </button>
          </div>
        </div>

        <div className="box4">
          <div className="info">
            <div className="img4">
              <img className="imagem4" src={Shoe} alt="Shoe" />
            </div>
            <p className="Calçados">Calçados</p>
            <h6 className="Valor4"> A partir de $89,99. </h6>
            <p className="Caldescric">
              Aproveite 10% de desconto na categoria de calçados.{' '}
            </p>
            <p className="Itens4">Itens: {Quantcalç}</p>
            <button className="Aumentarfun4" onClick={this.crescerfun}>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

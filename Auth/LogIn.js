import React from 'react';
//import { NavLink } from 'react-router-dom'
import './LogIn.css'
import { Carousel } from 'react-responsive-carousel';
import Avengers from '../Assests/Avengers.jpg'
import c3 from '../Assests/c3.jpg'
import c2 from '../Assests/c2.jpg'
import c4 from '../Assests/c4.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Blog extends React.Component{

    state={
        showForm: false,
        movies: { title: null, Description: null, About: null, Directors:null },
        show: false,
        data: null
    }

    insertHandler=()=>{
        let form = !(this.state.showForm)
        this.setState({showForm: form})
    }
    stateHandler=(event, place)=>{
        if(place==='title'){
            let title = event.target.value;
            let NewMovies = this.state.movies
            NewMovies.title = title
            this.setState({movies: NewMovies})
            
        }
        if(place==='D'){
            let D = event.target.value;
            let NewMovies = this.state.movies
            NewMovies.Description = D
            this.setState({movies: NewMovies})
        }
        if(place==='About'){
            let Abt = event.target.value;
            let NewMovies = this.state.movies
            NewMovies.About = Abt
            this.setState({movies: NewMovies})
        }
        if(place==='Directors'){
            let Dir = event.target.value;
            let NewMovies = this.state.movies
            NewMovies.Directors = Dir
            this.setState({movies: NewMovies})
        }
    }
    addMovieHandler=()=>{
         console.log('we are adding a movie now')
        console.log(this.state.show)
        if(this.state.show){
            this.setState({show: false})
        }else{
        this.setState({show: true})
        }
        console.log(this.state.show)
        
    }

    render(){
        let form = this.state.showForm? <form className='form'>
            <input className='input' placeholder="title" onChange={(event)=>this.stateHandler(event, 'title')}></input>
            <input className='input' placeholder="About" onChange={(event)=>this.stateHandler(event, 'About')} ></input>
            <input className='input2' placeholder="Description" onChange={(event)=>this.stateHandler(event, 'D')} ></input>
            <input className='input' placeholder="Directors" onChange={(event)=>this.stateHandler(event, 'Directors')} ></input>


            <button type='button' onClick={this.addMovieHandler}>Submit</button>
        </form> : null;

        

        
    return(
        <div className='container'>
            
            <Carousel>
                <div>
                    <img src={c3} alt='NULL'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={c2} alt='NULL'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={c4} alt='NULL'/>
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>

            <section>
            
                <div className='card'>
                    <div className='flex'>
                        <div className='image'>
                        <img src={Avengers} alt='NULL'></img>
                        </div>
                        
                        <div>
                            <h2 style={{color:'blue', fontWeight:'bolder' }}>1. Avengers: Endgame (2019) </h2>
                            <p style={{color:'black' }}>PG-13 | 181 min | Action, Adventure, Drama</p>
                            <h3 style={{color:'black', fontWeight:'bold'}}>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.</h3>
                            <p style={{color:'black' }}>Directors: Anthony Russo, Joe Russo | Stars: Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth</p>
                        </div>   
                        <div></div>
                    </div>
                    
                </div>
            
            </section>
            <button type='button' className='button' onClick={this.insertHandler}>Add a movie</button>
            {form}
            {
              this.state.show? <div className='card' onClick={this.addMovieHandler}>
              <div className='flex'>
                  <div className='image'>
                  <img src={Avengers} alt='NULL'></img>
                  </div>
                  
                  <div>
                      <h2 style={{color:'blue', fontWeight:'bolder' }}> {this.state.movies.title}  </h2>
                      <p style={{color:'black' }}> {this.state.movies.About}  </p>
                      <h3 style={{color:'black', fontWeight:'bold'}}>{this.state.movies.Description}</h3>
                      <p style={{color:'black' }}> {this.state.movies.Directors}  </p>
                  </div>   
                  <div></div>
              </div>
           </div>
               : null
            }

        </div>
    )

}
}

export default Blog;
import React from 'react';
// Material UI
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
// Icons
import Icon from 'react-icons-kit';
import {star} from 'react-icons-kit/fa/star'
import {starO} from 'react-icons-kit/fa/starO'
import {ecommerce_money} from 'react-icons-kit/linea/ecommerce_money'
import {arrows_question} from 'react-icons-kit/linea/arrows_question'
import {music_diapason} from 'react-icons-kit/linea/music_diapason'
import {basic_pencil_ruler} from 'react-icons-kit/linea/basic_pencil_ruler'
// SVG
import ReactSVG from 'react-svg';
import CodeLanguage from './../../../assets/svg/codelanguage.svg';
import CodeFork from './../../../assets/svg/codefork.svg';
import Friend from './../../../assets/svg/friend.svg';
import HelmetGoggles from './../../../assets/svg/helmet_goggles.svg';
import Simpleclock from './../../../assets/svg/simple_clock.svg';
import Wallet from './../../../assets/svg/wallet.svg';
import Issue from './../../../assets/svg/issue.svg';
import Star from './../../../assets/svg/star.svg';
import StarFilled from './../../../assets/svg/starfilled.svg';
// Components
import Chip from './../../global/components/chip';
import VoteButtons from './../../global/components/voteButtons.js';
import {ShareButton} from './../../global/components/majorActionButtons';
import PersonChip from './../../global/components/personChip';
// Redux
import {connect} from 'react-redux'
//import {starProject} from './../../../actions/repo.actions';
//import {getStarStatus} from './../../../reducers/repo.reducer'
import {getUser} from './../../../reducers/user.reducer';
// MISC
import ReactTimeAgo from 'react-time-ago'
import {Link} from 'react-router-dom';



class RepoCard extends React.Component {
  constructor(props){
    super(props);
    this.handleStar=this.handleStar.bind(this);
  };

  handleStar() {
    //this.props.dispatch(starProject(this.props.content._id));
  };

  render() {
    console.log(this.props)
    return (
      <div className="RepoCard ExploreCard">
        <div className="VoteButtons">
          <VoteButtons id={this.props.content._id} votes={this.props.content.upvotes} user={this.props.user} type="project"/>
        </div>
        <div className="LeftImage" style={{backgroundImage:"url(https://i.imgur.com/69fXyag.jpg)"}}>
          <ReactSVG src={Star} className="ReactSVGIcon StarIcon"/>
        </div>
        <div className="RightDetails">
          <div className="Header">
            <Typography component={Link} to={`/${this.props.content.creator_name}/project/${this.props.content._id}`} className="Title" variant="h6">{this.props.content.project_name}</Typography>
            <Typography className="LinkUnderline" component={Link} to={`/${this.props.content.creator}/profile`}>@{this.props.content.creator_name}</Typography>
            <div className="When">
              <ReactSVG src={Simpleclock} className="ReactSVGIcon ClockIcon" />
              <ReactTimeAgo locale="en">
                {Date.parse(this.props.content.date)}
              </ReactTimeAgo>
            </div>
          </div>
          <div className="Body">
            <Typography variant="subtitle1" color="textPrimary" className="Description" component={Link} to={`/${this.props.content.creator_name}/project/${this.props.content._id}`}>{this.props.content.description}</Typography>
          </div>
          <div className="Bottom">
            <div className="Stats">
              <div className="StatDiv" style={{display:"none"}}>
                <ReactSVG src={CodeLanguage} className="ReactSVGIcon CodeLanguageIcon"/>
                <Typography variant="caption" className="Stat">language</Typography>
              </div>
              <div className="StatDiv">
                <ReactSVG src={CodeFork} className="ReactSVGIcon CodeForkIcon"/>
                <Typography variant="caption" className="Stat">{this.props.content.forks_count}</Typography>
              </div>
              <div className="StatDiv">
                <ReactSVG src={Issue} className="ReactSVGIcon IssueIcon"/>
                <Typography variant="caption" className="Stat">x</Typography>
              </div>
            </div>
            <div className="ExploreCardTags">
              {this.props.content.tags.map(tag => {
                return (
                  <div key={tag} className="ExploreCardTag">
                    <Chip {...this.props} label={tag}/>
                  </div>
                )
              })}
            </div>
            <div className="ShareButton">
              <ShareButton {...this.props} title={this.props.content.project_name} url={`www.source.lol/${this.props.content.creator_name}/project/${this.props.content._id}`}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RepoCard;

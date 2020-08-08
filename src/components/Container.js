import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import HomeTab from './HomeTab';
import Contact from './Contact';
import Portfolio from './Portfolio';

function Container({ location, status, setName, setStatus }) {
    return (
        <TransitionGroup className="transition-group">
            <CSSTransition
                timeout={{ enter: 300, exit: 300 }}
                classNames="slide"
                key={location.key}
            >
                <section className="route-section">
                    <Switch>
                        <Route path="/" exact component={HomeTab} />
                        <Route
                            path="/contact"
                            render={(props) =>
                                <Contact {...props} status={status} setStatus={setStatus} setName={setName} />
                            }
                        />
                        <Route path="/projects" component={Portfolio} />
                    </Switch>
                </section>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default withRouter(Container);
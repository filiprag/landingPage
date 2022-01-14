import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardDeck,
  Dropdown,
  DropdownButton,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <div>
      <div className="rubrik_home_div">
        <h1 className="rubrik_home">Detta är jag</h1>
      </div>
      <div className="About-text-container">
        <h1 className="About-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
          ligula iaculis, posuere urna at, placerat sapien. Curabitur sit amet
          tincidunt nisi. In aliquet lacus id tempus gravida. Nunc ut urna vel
          nulla vehicula aliquet sit amet sed ante. Aliquam malesuada vitae nisl
          id tempor. Fusce id libero mi. Quisque elementum eros ligula, id
          luctus urna dapibus ut. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. In auctor a quam nec fermentum.
          Aenean eu facilisis velit. Integer id lectus vel ligula feugiat mattis
          sed ut erat. Quisque pharetra dolor sed consectetur imperdiet.
        </h1>
        <h1 class="About-text">
          Aliquam commodo accumsan aliquam. In tincidunt massa pharetra nulla
          lacinia, at aliquet erat cursus. Donec arcu ligula, laoreet sed dolor
          at, interdum imperdiet elit. Curabitur eget porttitor ligula. Duis in
          blandit est. Donec vel tempor nunc. Pellentesque vel fringilla eros.
          Nulla ac augue id justo porttitor sollicitudin et et ipsum. Nulla
          tellus lectus, faucibus vitae bibendum ac, convallis in sem.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Quisque metus mauris, vehicula a ultrices sit
          amet, rhoncus eget sem. Phasellus posuere, turpis vel porttitor
          blandit, risus purus consequat arcu, quis fermentum nisi est vitae
          dolor. Fusce a eros erat. Integer accumsan libero ac nunc congue
          congue. Morbi pulvinar arcu eu nulla egestas, at tincidunt erat
          fringilla. Vestibulum nunc metus, elementum ut accumsan vitae,
          efficitur in mauris. Aenean mollis sem quis fringilla fringilla. Nulla
          laoreet, sapien eu tempus hendrerit, sapien erat molestie nibh, quis
          pretium arcu justo quis mauris. In a nisi sit amet nulla cursus
          efficitur. Aliquam sem ante, pharetra non ultrices a, ultrices vitae
          purus. Quisque feugiat tellus eu sem rutrum posuere. Nunc arcu ex,
          hendrerit a fringilla eget, porttitor non ipsum. Praesent eu tortor id
          ex congue fermentum. Ut et vulputate orci, at mollis elit. Morbi eget
          ante porttitor, tempor lacus eu, volutpat leo. Quisque vel quam vitae
          arcu condimentum pharetra. Duis ex ante, pretium vel cursus vitae,
          convallis sit amet lacus. In eros velit, vulputate a mauris sed,
          sagittis pretium dolor.
        </h1>
        <h1 class="About-text">
          Aliquam commodo accumsan aliquam. In tincidunt massa pharetra nulla
          lacinia, at aliquet erat cursus. Donec arcu ligula, laoreet sed dolor
          at, interdum imperdiet elit. Curabitur eget porttitor ligula. Duis in
          blandit est. Donec vel tempor nunc. Pellentesque vel fringilla eros.
          Nulla ac augue id justo porttitor sollicitudin et et ipsum. Nulla
          tellus lectus, faucibus vitae bibendum ac, convallis in sem.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Quisque metus mauris, vehicula a ultrices sit
          amet, rhoncus eget sem. Phasellus posuere, turpis vel porttitor
          blandit, risus purus consequat arcu, quis fermentum nisi est vitae
          dolor. Fusce a eros erat. Integer accumsan libero ac nunc congue
          congue. Morbi pulvinar arcu eu nulla egestas, at tincidunt erat
          fringilla. Vestibulum nunc metus, elementum ut accumsan vitae,
          efficitur in mauris. Aenean mollis sem quis fringilla fringilla. Nulla
          laoreet, sapien eu tempus hendrerit, sapien erat molestie nibh, quis
          pretium arcu justo quis mauris. In a nisi sit amet nulla cursus
          efficitur. Aliquam sem ante, pharetra non ultrices a, ultrices vitae
          purus. Quisque feugiat tellus eu sem rutrum posuere. Nunc arcu ex,
          hendrerit a fringilla eget, porttitor non ipsum. Praesent eu tortor id
          ex congue fermentum. Ut et vulputate orci, at mollis elit. Morbi eget
          ante porttitor, tempor lacus eu, volutpat leo. Quisque vel quam vitae
          arcu condimentum pharetra. Duis ex ante, pretium vel cursus vitae,
          convallis sit amet lacus. In eros velit, vulputate a mauris sed,
          sagittis pretium dolor.
        </h1>
        <ScrollAnimation animateIn="fadeIn">
          <h1 class="About-text">
            Aliquam commodo accumsan aliquam. In tincidunt massa pharetra nulla
            lacinia, at aliquet erat cursus. Donec arcu ligula, laoreet sed
            dolor at, interdum imperdiet elit. Curabitur eget porttitor ligula.
            Duis in blandit est. Donec vel tempor nunc. Pellentesque vel
            fringilla eros. Nulla ac augue id justo porttitor sollicitudin et et
            ipsum. Nulla tellus lectus, faucibus vitae bibendum ac, convallis in
            sem. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Quisque metus mauris, vehicula a
            ultrices sit amet, rhoncus eget sem. Phasellus posuere, turpis vel
            porttitor blandit, risus purus consequat arcu, quis fermentum nisi
            est vitae dolor. Fusce a eros erat. Integer accumsan libero ac nunc
            congue congue. Morbi pulvinar arcu eu nulla egestas, at tincidunt
            erat fringilla. Vestibulum nunc metus, elementum ut accumsan vitae,
            efficitur in mauris. Aenean mollis sem quis fringilla fringilla.
            Nulla laoreet, sapien eu tempus hendrerit, sapien erat molestie
            nibh, quis pretium arcu justo quis mauris. In a nisi sit amet nulla
            cursus efficitur. Aliquam sem ante, pharetra non ultrices a,
            ultrices vitae purus. Quisque feugiat tellus eu sem rutrum posuere.
            Nunc arcu ex, hendrerit a fringilla eget, porttitor non ipsum.
            Praesent eu tortor id ex congue fermentum. Ut et vulputate orci, at
            mollis elit. Morbi eget ante porttitor, tempor lacus eu, volutpat
            leo. Quisque vel quam vitae arcu condimentum pharetra. Duis ex ante,
            pretium vel cursus vitae, convallis sit amet lacus. In eros velit,
            vulputate a mauris sed, sagittis pretium dolor.
          </h1>
        </ScrollAnimation>
      </div>

      <Card className="Card-home"></Card>
    </div>
  );
}

export default About;

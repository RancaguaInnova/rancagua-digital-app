import { FC, useEffect, useState } from "react";
import { Typography } from "antd";
import { CardStyled } from "./styles";
import Linkify from "react-linkify";
import openCapacitorSite from "components/openCapacitorBrowser";
import ReactHtmlParser from "react-html-parser";
import { getFromStorage } from "hooks/useStorage";
import _get from "lodash/get";
import _trim from "lodash/trim";
import { ImCalendar, ImRoad } from "react-icons/im";
import moment from "moment";
import { FaExternalLinkAlt, FaWaze } from "react-icons/fa";
import { Geolocation } from "@capacitor/geolocation";
import { withSession } from "hoc/withSession";
import { Session } from "core/types/session";

interface EventDetailProps {
session: Session;
}
const EventDetail: FC<EventDetailProps> = ({session}) => {
  const { Text, Title, Link } = Typography;






  const [Evento, setEvento] = useState(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    const cargarEvento = async () => {
      let e = await getFromStorage("event", null);
      setEvento(e);
      console.log("e", e);
    };

    printCurrentPosition();

    cargarEvento();
    return () => {};
  }, []);

  const printCurrentPosition = () => {
    Geolocation.checkPermissions()
      .then((r) => {
        console.log("r", r);
        if (r.location === "granted") {
          Geolocation.getCurrentPosition().then((coordinates) => {
            setLatitude(coordinates.coords.latitude);
            console.log("latitude", coordinates.coords.latitude);
            setLongitude(coordinates.coords.longitude);
            console.log("longitude", coordinates.coords.longitude);
          });
        }
      })
      .catch((err) => console);
  };

  console.log("url", _get(Evento, "externalUrl", null));
  const userToken=session?.userToken || ""

  const url= _get(Evento, "externalUrl", null)+"&token="+userToken
  console.log("url", url);

  return (
    <>
      {Evento && (
        <CardStyled
          hoverable
          cover={<img src={_get(Evento, "imageUrl", "")}></img>}
        >
          <Title level={5}>{_get(Evento, "name", "")}</Title>
          <Linkify
            componentDecorator={(decoratedHref, decoratedText, key) => (
              <p key={key}>
                {" "}
                <a onClick={() => openCapacitorSite(decoratedHref)}>
                  &nbsp; {decoratedText}
                </a>
              </p>
            )}
          >
            {ReactHtmlParser(_get(Evento, "description", ""))}
          </Linkify>
          <p>
            <ImCalendar /> &nbsp;Fecha:{" "}
            <Text strong type="warning">
              {moment(_get(Evento, "date", "")).format("DD/MM/YYYY")}&nbsp;
              {_get(Evento, "time", "")}
            </Text>
          </p>
          <p>
            <ImRoad /> &nbsp;Dirección:
            <Text strong type="warning">
              {_get(Evento, "address.streetName", "")}
            </Text>
          </p>
          {_get(Evento, "externalUrl", null) && (
            <p>
              <FaExternalLinkAlt></FaExternalLinkAlt>{" "}
              <Link href={url} target="_blank">
                Ver mas
              </Link>
            </p>
          )}
          {_get(Evento, "address.latitude", null) && (
            <p>
              <FaWaze></FaWaze>{" "}
              <Link
                href={`https://www.waze.com/es-419/live-map/directions?navigate=yes&utm_campaign=default&utm_medium=lm_share_location&utm_source=waze_website&to=ll.${_trim(
                  _get(Evento, "address.latitude", "")
                )},${_trim(
                  _get(Evento, "address.longitude", "")
                )}&from=ll.${latitude},${longitude}`}
                target="_blank"
              >
                Ver en waze
              </Link>
            </p>
          )}
        </CardStyled>
      )}
    </>
  );
};
export default withSession(EventDetail);

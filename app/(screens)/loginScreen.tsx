import { Button } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import Header from "@/components/leonardoUI/Header";
import Input from "@/components/leonardoUI/Input";
import MainView from "@/components/leonardoUI/MainView";
import Tabs from "@/components/leonardoUI/Tabs";

export default function LoginScreen() {
  return (
    <MainView>
      <Header
        title="Login Screen"
        description="An authentication template with two variants."
        navBack
      />
      <Tabs type="outline" defaultActiveTab="magic-link">
        <Tabs.Tab id="magic-link" label="Magic Link" />
        <Tabs.Tab id="password" label="Password" />

        <Tabs.TabContent tabId="magic-link">
          <Card cover={require("@/assets/covers/featured-sample.png")}>
            <Card.Title>Welcome to ACME</Card.Title>
            <Card.Description>Login to your account</Card.Description>
            <Input label="Email" size="sm" placeholder="example@gmail.com" />
            <Button caption="Send magic link" type="default" />
            <Card.Footer
              text="Need help?   Contact us"
              button={<Button caption="Create an account" type="outline" />}
            />
          </Card>
        </Tabs.TabContent>
        <Tabs.TabContent tabId="password">
          <Card cover={require("@/assets/covers/featured-sample.png")}>
            <Card.Title>Welcome to ACME</Card.Title>
            <Card.Description>Login to your account</Card.Description>
            <Input label="Email" size="sm" placeholder="example@gmail.com" />
            <Input
              label="Password"
              size="sm"
              placeholder="Enter your password"
              secureTextEntry
            />
            <Button caption="Login" type="default" />
            <Card.Footer
              text="Forgot password?"
              button={<Button caption="Create an account" type="outline" />}
            />
          </Card>
        </Tabs.TabContent>
      </Tabs>
    </MainView>
  );
}

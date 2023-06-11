'use client'

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "../../hooks/useAuthModal";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal()

  const onChange = (open: boolean) => {
    if (!open) onClose()
  }

  return (
    <Modal
      title="Welcome Back"
      description="Login to your Account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        theme="dark"
        providers={['github']}
        magicLink
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#a742ff'
              }
            }
          }
        }}
      />
    </Modal>
  );
}

export default AuthModal;